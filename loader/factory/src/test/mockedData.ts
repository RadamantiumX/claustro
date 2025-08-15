import { ApiData, UserColab, ApiKey, Datum } from "index";


export const mockApiData:ApiData = {
  id: 1,
  appName: 'appnamemock',
  dataId:1,
  appId: 'apidmock',
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now())
}

export const mockUserColab:UserColab = {
    id:'asas',  
    username: 'usecolabmock',
    email: "user@mock.com",
    password: 'testingmock123',
    lastSignIn: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isSuperAdmin: false,
   }

export const mockedApiKey:ApiKey = {
  id: 1,
  apiKey: "apikeymocked",
  apiKeySecret: "secretmocked",
  bearerToken: "bearedmocked",
  accessToken: "accesstokenmocked",
  accessTokenSecret: "secretaccesstokenmocked",
  apiDataId:1,
  dataId: 1,
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now())
}

export const mockedData:Datum = {
  id: 1,
  emailSource: "mocked@mail.com",
  emailSourcePsw: "mockedpassword",
  xUser: "xusermocked",
  xPsw: "xpassmocked",
  userColabId: "mockedid",
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now())
}