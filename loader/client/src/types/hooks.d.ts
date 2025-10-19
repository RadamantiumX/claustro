export interface SignInHandler{
    formData: {
        username:string;
        password:string;
        isSuperAdmin:boolean;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface LogoutOutput {
    onLogout:()=>void
}