import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";


class UsersService {

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        // access repo to create and save user
        const usersRepository = new UsersRepositoryInMemory();

        const user = await usersRepository.create({ name, email, password });

        return user;
    }

    async findByEmail(email: string): Promise<User>{

        const usersRepository = new UsersRepositoryInMemory();

        const user = await usersRepository.findByEmail(email);

        return user;
    }



}

export { UsersService }