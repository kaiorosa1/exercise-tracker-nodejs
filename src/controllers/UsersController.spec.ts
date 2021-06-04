import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";

let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Create a new user", ()=> {
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
    });

    it("should be able to create a new user", async ()=> {
        const user = {
            name: "John",
            email: "john@test.com",
            password: "123"
        }

        const result = await usersRepositoryInMemory.create(user);

        expect(result).toHaveProperty("id");
    });
});