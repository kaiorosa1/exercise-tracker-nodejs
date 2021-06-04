import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create({name, email, password}: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository }