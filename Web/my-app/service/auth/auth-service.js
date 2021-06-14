import Password from "antd/lib/input/Password";
import config from "../../src/config";
import axios from 'axios'



const _config = config.configAPIGateway();
const _login = config.configAPILogin();


class AuthService {

    async tokenGateway() {
       
       try {

        
        let response = await fetch(`${_config.URI_GATEWAY}/token?usuario=${_config.API_USER}`,{
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });

        console.log(response);
        if(response.status === 200)
            return await response.json();
           
            return null;

       } catch (error) {
        console.log(error);
       } 
    
    }

    async login(usuario) {
        try{
    
          
            let response = await fetch(`${_login.URI_API}`,{
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json', 
                    },
                body: usuario
            });

            console.log(response);
            if(response.status === 200)
                return await response.json();
                console.log('tudo ok')

            return null;


        }catch(error)
        {
            console.log(error);

        }
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return null;
    }
    
    getUserInfo() {
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    headerAPITecnico(){
        if(localStorage.getItem("userInfo"))
            return ({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`
                });
        else
            return null;
    } 
}
export default new AuthService();