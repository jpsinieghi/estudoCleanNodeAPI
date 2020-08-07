class LoginController{
    constructor(authentication){
        this.authentication = authentication
    }
    handle(request){
        const {email, password} = request.body
        this.authentication.auth(email, password)

    }
}

class Authentication{
    auth(email, password){
        console.log(email, password)
        return true
    }
}

const authentication = new Authentication()
const controller = new LoginController(authentication)
controller.handle({
    body:{
        email: 'any_email',
        password: 'any,password'
    }
})


