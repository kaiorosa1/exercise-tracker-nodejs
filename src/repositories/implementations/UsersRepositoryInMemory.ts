import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    constructor() { }

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { name, email, password });

        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        console.log("email in repo in mem")
        const user = this.users.find((user) => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }
}

export { UsersRepositoryInMemory }