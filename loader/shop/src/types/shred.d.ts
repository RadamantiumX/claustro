export interface StateProps {
    user: null | string | undefined;
    token: null | string | undefined;
    setUser: (user:string | undefined | null)=>void;
    setToken: (token:string | null )=>void; 
}