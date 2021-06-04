import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }

}

export { UsersRepository }