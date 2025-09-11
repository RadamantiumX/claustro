import { RefreshTokenRepository } from "../../repository/refreshTokenRepository";
import { mockRefreshToken } from "../mockedData";
import { prismaMock } from "../setup";
import { it, expect, beforeEach, describe } from "vitest";

describe('RefreshTokenRepository',()=>{
    let refreshTokenRepository:RefreshTokenRepository

     beforeEach(()=>{
       refreshTokenRepository = new RefreshTokenRepository(prismaMock)
    })
    it('should create a new refreshToken', async()=>{
        prismaMock.authRefreshToken.create.mockResolvedValueOnce(mockRefreshToken)
        const mockedData = await refreshTokenRepository.createRefeshToken({
                refreshToken: mockRefreshToken.refreshToken,
                userColabId: mockRefreshToken.userColabId
        })

        expect(mockedData).toEqual(undefined)

        expect(prismaMock.authRefreshToken.create).toHaveBeenCalledWith({
            data:{
                refreshToken: mockRefreshToken.refreshToken,
                userColabId: mockRefreshToken.userColabId
            }
        })
    })
})