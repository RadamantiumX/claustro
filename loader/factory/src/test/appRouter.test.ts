import { describe, expect, it } from 'vitest';
import { TRPCError } from '@trpc/server';
import { appRouter } from '../routers';
import AppError from '../errors/appErrors';


describe("appRouter", ()=>{
    it("should be caller", async ()=>{
        const caller = appRouter.createCaller({});

        const r = await caller.auth.login({username:'asasadsdadasdas', password:"dsdasdasdasddasd"})
        expect(r).toThrowError('Missing data')
    })
})