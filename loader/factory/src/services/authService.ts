import { IuserColabRepository, IRefreshTokenRepository, UserColab, AuthMethods } from "index";
import AppError from "../errors/appErrors";
import bcrypt from "bcryptjs";
import { JWTtokenSign, JWTverifyAndDecode } from "../helper/jwtFunctions";
import { UserColabRepository } from "../repository/userColabRepository";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient";
import { A_TOKEN_EXP, R_TOKEN_EXP } from "../const/tokenExpiration";
import { EnvFactoryErrors } from "../errors/envFactoryErrors";

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
          const verifyUser = await this.userColabRepository.getUnique({
            username: bodyReq.username,
          });
          // TODO: make the token verfication, if the current USER have a token, then, this token must be deleted. Only ONE session for device once.
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
          throw new EnvFactoryErrors();
        }
      },
      register: async (bodyReq: Pick<UserColab, "username" | "password">) => {
        try{
          const verifyUser = await this.userColabRepository.getUnique({
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
           throw new EnvFactoryErrors()
        }
        
      },
      verifyCredentials: async (authHeader: string) => {
        try{
           const { username } = JWTverifyAndDecode(authHeader);
        const checkUser = await this.userColabRepository.getUnique({
          username,
        });
        return checkUser;
        }catch(error){
          throw new EnvFactoryErrors()
        }
       
      },
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
