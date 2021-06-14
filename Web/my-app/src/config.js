class config {

    configAPIGateway = () => {

        return {
            API_USER: 'adsuasgdhjasgdhjdgahjsg12hj3eg12hj3g12hj3g12hj3g123',
            URI_GATEWAY: 'http://127.0.0.1:8686/user'
            
        }
    }
    configAPILogin = () => {
        return{
            URI_API: 'http://127.0.0.1:8686/login'
        };
    }

}


export default new config;