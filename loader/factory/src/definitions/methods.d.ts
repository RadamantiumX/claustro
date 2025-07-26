import { UserColab, UserColabClientResponse } from "factory";

export interface UserColabMethods{
  list: () => Promise<UserColabClientResponse>;
  create: (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >) => Promise<void>; 
  select: (id:Pick<UserColab, "id">) => Promise<> ;
  update: (payload:Pick<UserColab, "id"| "username" | "password" | "isSuperAdmin">)=>Promise<void>;
  delete: (id: Pick<UserColab, 'id'>) => Promise<void> ;
}

export interface DataMethods{
   list: () => Promise<>;
   create: () => Promise<>;
   select: () => Promise<>;
   update: () => Promise<>;
   delete: () => Promise<>;
}