export const DATA_INPUTS = [
  {
    for: "email-source",
    label: "Email Source",
    typeInput: "email",
    propInput: "emailSource",
    placeholder: "user@mail.com",
    value: ""
  },
  {
    for: "email-password",
    label: "Email Password",
    typeInput: "text",
    propInput: "emailSourcePsw",
    placeholder: "Insert Email Password",
    value: ""
  },
  {
    for: "x-username",
    label: "X Username",
    typeInput: "text",
    propInput: "xUser",
    placeholder: "xusername",
    value: ""
  },
  {
    for: "x-password",
    label: "X Password",
    typeInput: "text",
    propInput: "xPsw",
    placeholder: "Insert X Username Password",
    value: ""
  },
]

export const APIDATA_INPUTS = [
 {
    for: "appName",
    label: "App name",
    typeInput: "text",
    propInput: "appName",
    placeholder: "Insert App Name",
    value: "",
    readonly:false
  },
  {
    for: "appId",
    label: "App Id",
    typeInput: "text",
    propInput: "AppId",
    placeholder: "Insert App Id",
    value: "",
    readonly:false
  }
]

export const FUL_DATA_INPUTS = [
   {
    for: "Id",
    label: "Id",
    typeInput: "number",
    propInput: "Id",
    placeholder: "",
    value: "",
    readonly:true
  },
  {
    for: "email-source",
    label: "Email Source",
    typeInput: "email",
    propInput: "emailSource",
    placeholder: "user@mail.com",
    value: "",
    readonly:false
  },
  {
    for: "email-password",
    label: "Email Password",
    typeInput: "text",
    propInput: "emailSourcePsw",
    placeholder: "Insert Email Password",
    value: "",
    readonly:false
  },
  {
    for: "x-username",
    label: "X Username",
    typeInput: "text",
    propInput: "xUser",
    placeholder: "xusername",
    value: "",
    readonly:false
  },
  {
    for: "x-password",
    label: "X Password",
    typeInput: "text",
    propInput: "xPsw",
    placeholder: "Insert X Username Password",
    value: "",
    readonly:false
  },
]

export const FULL_APIDATA_INPUTS = [
  {
    for: "Id",
    label: "Id",
    typeInput: "number",
    propInput: "Id",
    placeholder: "",
    value: "",
    readonly:true
  },
  
  {
    for: "appName",
    label: "App name",
    typeInput: "text",
    propInput: "appName",
    placeholder: "Insert App Name",
    value: "",
    readonly:false
  },
  {
    for: "appId",
    label: "App Id",
    typeInput: "text",
    propInput: "AppId",
    placeholder: "Insert App Id",
    value: "",
    readonly:false
  }
]


export const SIGNIN_INPUTS = [
                  {
                    typeInput:"text", 
                    propInput:"username", 
                    value: "", 
                    placeholder:"Username"
                  },
                  {
                    typeInput: "password", 
                    propInput:"password",
                    value: "", 
                    placeholder: "Password"
                  }
                ]

/**
 * Data Get Unique (ID) RESPONSE:
 *  select:{
            id: true,
            emailSource:true,
            emailSourcePsw:true,
            xUser: true,
            xPsw:true,
            apiData: {
                select: {
                    id:true,
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
                    id: true,
                    apiKey: true,
                    apiKeySecret: true,
                    bearerToken: true,
                    accessToken: true,
                    accessTokenSecret: true
                }
            }
        }
 * 
 * 
 *  */