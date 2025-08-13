
import { UserColabRepository } from "../../repository/userColabRepository";
import { prismaMock } from "../setup";
import { it, vi, expect, expectTypeOf, beforeEach, describe } from "vitest";
import { mockReset } from "vitest-mock-extended";






/*vi.mock('./UserColabRepository', ()=>({
   UserColabRepository: vi.fn().mockImplementation(()=>({
      createUserColab: vi.fn()
   }))
}))
const userColabRepository = new UserColabRepository(prismaMock)
*/
describe('UserColabRepository',()=>{
  let userColabRepository:UserColabRepository

  beforeEach(()=>{
   userColabRepository = new UserColabRepository(prismaMock)
})

it('should create new userColab',async ()=>{
const mockUserColab = {
    id:'asas',  
    username: 'usecolabmock',
    email: "user@mock.com",
    password: 'testingmock123',
    lastSignIn: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isSuperAdmin: false,
   }

   prismaMock.userColab.create.mockResolvedValueOnce(mockUserColab)
   const newUser = await userColabRepository.createUserColab({username: 'usecolabmock', password: 'testingmock123'})
   
   expect(newUser).toEqual(undefined)
   expect(prismaMock.userColab.create).toHaveBeenCalledWith({
      data: {
         username: 'usecolabmock',
         password: 'testingmock123'
      }
   })
})
})





/*it('sould create new user', async () => {
   const spyFn = vi.spyOn(userColabRepository, 'createUserColab')
   spyFn.mockReturnValue(Promise<void>)
   /*prismaMock.userColab.create.mockResolvedValue(MockUserColab)
  await expect(userColabRepository.createUserColab({username:MockUserColab.username, password: MockUserColab.password})).toHaveBeenCalled()*/
//})

/*it('should return a unique user', async ()=>{
   const mockUserColab = {
    id:'asas',  
    username: 'usecolabmock',
    email: "user@mock.com",
    password: 'testingmock123',
    lastSignIn: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isSuperAdmin: false,
   }
   const userColabRepository = new UserColabRepository()
   prismaMock.userColab.create.mockResolvedValue(mockUserColab)
   await expect(userColabRepository.getUnique({username: mockUserColab.username})).resolves.toEqual({
      id:'asas',
      isSuperAdmin: false,
      username: 'usecolabmock',
      password: 'testingmock123'
   })
})*/