const axios = require("axios");
const authGateway = require('./auth/auth-service'); 

exports.api = async () => {

    try {
        
        const token = await authGateway.getTokenGateway();

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const {data, status} = await axios.get(`${global.URI_GATEWAY}/token?usuario=${global.API_USER}}`);

        console.log(data, status);

        return data;
  
    }catch(error){
        console.log(error);
        return null;
    }
}


