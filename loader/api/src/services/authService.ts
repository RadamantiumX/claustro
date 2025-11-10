import type {  IuserColabRepository, IRefreshTokenRepository, UserColab, AuthMethods, AuthRefreshToken } from "../declarations/index";
import AppError from "../errors/appErrors";
import bcrypt from "bcryptjs";
import { JWTtokenSign, JWTverifyAndDecode } from "../helper/jwtFunctions";
import { UserColabRepository } from "../repository/userColabRepository";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient";
import { A_TOKEN_EXP, R_TOKEN_EXP } from "../const/tokenExpiration";

// TODO: Appy "Then - Catch" to each filter to test
// Dependency Injection + Singleton PATTERN
export class AuthService {
  private static instance: AuthService; // Only for instance
  userColabRepository: IuserColabRepository;
  refreshTokenRepository:IRefreshTokenRepository;
  auth: AuthMethods;
  private constructor(userColabRepository: IuserColabRepository, refreshTokenRepository:IRefreshTokenRepository) {
    this.userColabRepository = userColabRepository;
    this.refreshTokenRepository = refreshTokenRepository; // Adding RT for make unique querys
    this.auth = {
      login: async (bodyReq: Pick<UserColab, "username" | "password">) => {
        try {
          const verifyUser = await this.userColabRepository.getUniqueUsername({
            username: bodyReq.username,
          });
          ///// TODO: make the token verfication, if the current USER have a token, then, this token must be deleted. Only ONE session for device once.
          if (!verifyUser) {
            throw new AppError(
              "Unauthorized",
              401,
              "Username or password is wrong, code: 401",
              false
            );
          }

          const verifyPsw = await bcrypt.compare(
            bodyReq.password,
            verifyUser.password
          );
          if (!verifyPsw) {
            throw new AppError(
              "Unauthorized",
              401,
              "Username or password is wrong, code: 401",
              false
            );
           // throw new Error('Some error on password provided')
            
          }

          // The User Session is only available in ONE DEVICE ONCE
          const oneDeviceSession = await this.refreshTokenRepository.uniqueUserColab({userColabId:verifyUser.id})

          // If the record exists
          if(oneDeviceSession){
            // The other session is dismissed
            await this.refreshTokenRepository.deleteRefreshToken({ userColabId:oneDeviceSession.userColabId })
          }
        
          await this.userColabRepository.updateTimestampSignIn({
            username: bodyReq.username,
          });
          const accessToken = JWTtokenSign({
            id: verifyUser.id,
            username: verifyUser.username,
            isSuperAdmin: verifyUser.isSuperAdmin,
            expiresIn: A_TOKEN_EXP,
          });
          const refreshToken = JWTtokenSign({
            id: verifyUser.id,
            username: verifyUser.username,
            isSuperAdmin: verifyUser.isSuperAdmin,
            expiresIn: R_TOKEN_EXP,
          });

          // New session REFRESH TOKEN
          await this.refreshTokenRepository.createRefeshToken({userColabId:verifyUser.id, refreshToken:refreshToken}) // Refresh token for this new session
          
          return {
            authData: {
              id: verifyUser?.id,
              username: verifyUser.username,
              isSuperAdmin: verifyUser.isSuperAdmin,
            },
            accessToken: accessToken,
            refreshToken: refreshToken,
          };
        } catch (error) {
           throw new AppError(
            "UNAUTHORIZED",
             401,
            "Login attemp with error",
            false
          );
        }
      },
      register: async (bodyReq: Pick<UserColab, "username" | "password">) => {
        try{
          const verifyUser = await this.userColabRepository.getUniqueUsername({
          username: bodyReq.username,
        });
        if (verifyUser) {
          throw new AppError(
            "Bad Request",
            400,
            "Provide a different username",
            false
          );
        }
        await this.userColabRepository.createSuperAdmin(bodyReq);
        return;
        }catch(error){
            throw new AppError(
            "Bad Request",
            400,
            "Provide a different username",
            false
          );
        }
        
      },
      verifyCredentials: async (authHeader: string) => {
        try{
           const { username } = JWTverifyAndDecode(authHeader);
        const checkUser = await this.userColabRepository.getUniqueUsername({
          username,
        });
        return checkUser;
        }catch(error){
           throw new AppError(
            "Bad Request",
            400,
            "Provide a different username",
            false
          );
        }
       
      },
      destroySession: async(bodyReq:Pick<AuthRefreshToken, 'userColabId'>) =>{
           try{
            await this.refreshTokenRepository.deleteRefreshToken(bodyReq)
            return
           }catch(error){
              throw new AppError(
            "Bad Request",
            400,
            "Provide a different username",
            false
          );
           }
      }
    };
  }

  static getInstance() {
    if (!AuthService.instance) {
      // Adding the new RT intance to verification
      AuthService.instance = new AuthService(new UserColabRepository(prisma), new RefreshTokenRepository(prisma));
      console.log("Service Auth ONLINE");
    }
    return AuthService.instance;
  }
}
