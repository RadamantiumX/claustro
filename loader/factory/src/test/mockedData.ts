import type { ApiData, UserColab, ApiKey, Datum, AuthRefreshToken } from "../declarations/index";


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

export const mockApiKey:ApiKey = {
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

export const mockData:Datum = {
  id: 1,
  emailSource: "mocked@mail.com",
  emailSourcePsw: "mockedpassword",
  xUser: "xusermocked",
  xPsw: "xpassmocked",
  userColabId: "mockedid",
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now())
}

export const mockRefreshToken:AuthRefreshToken = {
   id: '11555dsdas45',
   refreshToken: 'dasdas2654dasd485878asdkl',
   expiration: null,
   userColabId:'dsadaskkoolasdas1212das',
   createdAt: new Date(Date.now())
}

export const mockDataNested = {
  id: 1,
  emailSource: "mocked@mail.com",
  xUser: "xusermocked",
  apiData:{
    id: 1,
    appName: "mockedapidata",
    appId: "mockedappid"
  },
  apiKeys:{
    id: 1,
    apiKey: "apikeymocked",
    apiKeySecret: "apikeysecretmocked",
    bearerToken: "bearertokenmocked",
    accessToken: "accesstokenmocked",
    accessTokenSecret: "accesstokensecretmocked"
  },
}