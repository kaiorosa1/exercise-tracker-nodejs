import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepository/UsersRepositoryInMemory";
import { UsersService } from "../services/UsersService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersService: UsersService;

describe("Create a new user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersService = new UsersService(usersRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: "John",
            email: "john@test.com",
            password: "123"
        }

        const result = await usersService.create(user);

        expect(result).toHaveProperty("id");
    });
});


describe("Authenticate a user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersService = new UsersService(usersRepositoryInMemory);
    });

    it("should be able to auth a user", async () => {
       // Authenticate a use test

        expect(true);
    });
});