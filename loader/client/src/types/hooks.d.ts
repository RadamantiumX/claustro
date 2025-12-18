export interface SignInHandler{
    formData: FormDataSignIn;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    responseError: string
}

export interface LogoutOutput {
    onLogout:()=>void
}

export interface DataResource {
         id: number,
         emailSource: string,
         xUser: string,
         userColabId: string, 
         createdAt: Date
}

export interface InputArray {
    for: string;
    label: string;
    typeInput: string;
    propInput: string;
    placeholder: string;
    value: string;
}

export interface None {
     typeInput: string;
     propInput:string;
     value: string;
     placeholder:string;
}

export interface FormDataAddData {
        emailSource:string;
        emailSourcePsw: string;
        xUser:string;
        xPsw:string;
        userColabId: string;
}

export interface FormDataSignIn{
    username: string;
    password: string;
    isSuperAdmin:boolean;
}