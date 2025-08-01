import { describe, expect, it } from 'vitest';

import { appRouter } from '../routers';


describe("appRouter", ()=>{
    it("should be caller", async ()=>{
        const caller = appRouter.createCaller({});

        const r = await caller.auth.login({username:'asasadsdadasdas', password:"dsdasdasdasddasd", isSuperAdmin: false})
        expect(r).toBe(new Error())
    })
})