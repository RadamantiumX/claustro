import Cookies from "js-cookie";


let token:string | undefined;
let rtoken:string | undefined;
export const getToken = () => {
        token = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
        return token
    
   
}

export const getRefreshToken = () => {
        rtoken = Cookies.get('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo')
        
        return rtoken
}

export const clearTokens = () => {

}

export const cookieHandler = {
        getAccessToken: ()=> { return Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7') },
        getRefreshToken:()=>{ return Cookies.get('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo') },
        setAccessToken:(accessToken:string)=>{ Cookies.set('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7',accessToken,{expires: 1}) },
        setRefreshToken:(refreshToken:string)=>{ Cookies.set('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo',refreshToken,{expires: 1}) },
        clearTokens:()=>{
                Cookies.remove('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
                Cookies.remove('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo')
        },
}