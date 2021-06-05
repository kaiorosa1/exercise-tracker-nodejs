import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

class UsersService {

    constructor(private usersRepository: IUsersRepository) { }

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        // access repo to create and save user
        const user = await this.usersRepository.create({ name, email, password });

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.usersRepository.findByEmail(email);
        return user;
    }

    async findById(id: string): Promise<User> {

        const user = await this.usersRepository.findById(id);

        return user;
    }


}

export { UsersService }