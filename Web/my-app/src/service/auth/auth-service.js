import config from "../../config";


const _config = config.configAPIGateway();



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



    logOut() {
        localStorage.removeItem("user");
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
