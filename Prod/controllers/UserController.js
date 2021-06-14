const User = require("../models/User");
const PasswordToken = require("../models/PasswordToken");
const jwt = require("jsonwebtoken");

const secret = "adsuasgdhjasgdhjdgahjsg12hj3eg12hj3g12hj3g12hj3g123";

const bcrypt = require("bcrypt");


class UserController{
    async index(req, res){
        let users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        let id = req.params.id;
        let user = await User.findById(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }

    async create(req, res){
        let {email, name, role, password} = req.body;

        if(email == undefined || email == '' || email == ' ' ){
            res.status(400);
            res.json({err: "O e-mail é inválido!"})
            return;
        }

        let emailExists = await User.findEmail(email);

        if(emailExists){
            res.status(406);
            res.json({err: "O e-mail já está cadastrado!"})
            return;
        }

        
        await User.new(email,password,name,role);
        
        res.status(200);
        res.send("Tudo OK!");
    }

    async edit(req, res){
        let {id, name, role, email} = req.body;
        let result = await User.update(id,email,name,role);
        if(result != undefined){
            if(result.status){
                res.status(200);
                res.send("Tudo OK!");
            }else{
                res.status(406);
                res.send(result.err)
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor!");
        }
    }

    async remove(req, res){
        let id = req.params.id;

        let result = await User.delete(id);

        if(result.status){
            res.status(200);
            res.send("Tudo OK!");
        }else{
            res.status(406);
            res.send(result.err);
        }
    }

    async recoverPassword(req, res){
        let email = req.body.email;
        let result = await PasswordToken.create(email);
        if(result.status){
           res.status(200);
           res.send("" + result.token);
        }else{
            res.status(406)
            res.send(result.err);
        }
    }

    async changePassword(req, res){
        let token = req.body.token;
        let password = req.body.password;
        let isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){
            await User.changePassword(password,isTokenValid.token.user_id,isTokenValid.token.token);
            res.status(200);
            res.send("Senha alterada");
        }else{
            res.status(406);
            res.send("Token inválido!");
        }
    }

    async login(req, res){
        let {email, password } = req.body;

        let user = await User.findByEmail(email);

        if(user != undefined){

            let resultado = await bcrypt.compare(password,user.password);

            if(resultado){

                let token = jwt.sign({ email: user.email, role: user.role }, secret);

                res.status(200);
                res.json({token: token});

            }else{
                res.status(406);
                res.send("Senha incorreta");
            }

        }else{

            res.json({status: false});

        }
    }

}

module.exports = new UserController();