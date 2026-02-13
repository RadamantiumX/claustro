import Cookies from "js-cookie";


let token:string | undefined;
export const getToken = () => {
    
   
        token = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
        console.log(token)
        return token
    
   
}
