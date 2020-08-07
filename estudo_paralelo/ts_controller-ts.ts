type HttpRequest = {
    body: any
}

class TSLoginController{
    constructor(private readonly authentication: TSAuthentication){}
    handle(request: HttpRequest){
        const {email, password} = request.body
        this.authentication.auth(email, password)

    }
}

class TSAuthentication{
    auth(email: String, password: String){
        console.log(email, password)
        return true
    }
}

const tpauthentication = new TSAuthentication()
const tpcontroller = new TSLoginController(tpauthentication)
tpcontroller.handle({
    body:{
        email: 'any_email',
        password: 'any,password'
    }
})


