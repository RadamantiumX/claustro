import Cookies from "js-cookie";


let token:string | undefined;
export const getToken = () => {
    
    if(token !== undefined){
        token = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
        console.log(token)
        return token
    }
    return ''
}
