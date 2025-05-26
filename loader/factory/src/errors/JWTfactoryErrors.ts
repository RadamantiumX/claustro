import AppError from "./appErrors"

class JWTCustomError extends Error {
    constructor(message:string){
        super(message)
        this.name = "JWTCustomError"
    }
}


class TokenExpiredError extends JWTCustomError {
     constructor(expiredAt:any){
        super(`The token expired at (unix time): ${expiredAt}`)
        this.name = "TokenExpiredError"
     }
     
}

class JsonWebTokenError extends JWTCustomError {
    constructor(){
        super('The JWT is malformed')
        this.name = "JsonWebTokenError"
     }
}

class NotBeforeError extends JWTCustomError {
    constructor(date:any){
        super(`JWT is not active before: ${date}`)
        this.name = "NotBeforeError"
     }
}

export class JWTFactoryErrors{
    create(error:any){
        switch(error.name){
            case 'TokenExpiredError':
                return new TokenExpiredError(error.expiredAt);
                break;
            case 'JsonWebTokenError':
                return new JsonWebTokenError();
                break;
            case 'NotBeforeError':
                return new NotBeforeError(error.date);
                break;    
            default:
                return new AppError('Internal Error', 500,'An internal Error has occurred',false)
        }

    }
}