import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";


class UsersService{

    async create ({name, email, password}: ICreateUserDTO) {
        // access repo to create and save user
        const usersRepository = new UsersRepositoryInMemory();

        const user = await usersRepository.create({name, email, password});
        return user;
    }

}

export { UsersService }