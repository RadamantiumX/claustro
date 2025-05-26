class JWTCustomError extends Error {
    constructor(message:string){
        super(message)
        this.name = "JWTCustomError"
    }
}


class TokenExpiredError extends JWTCustomError {
     
}

class JsonWebTokenError extends JWTCustomError {
    
}

class NotBeforeError extends JWTCustomError {
    
}

export class JWTFactoryErrors{
    create(name:string){
        switch(name){
            case 'a':
                return 'autum';
            case 'b':
                return 'boiled';
            default:
                return 'cuthcer'        
        }

    }
}