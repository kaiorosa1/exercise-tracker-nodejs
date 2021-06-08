import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class UsersService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
        ) { }

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        // access repo to create and save user
        // creating a new user 
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exits!");
        }

        // improve salt
        const passwordHashed = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: passwordHashed
        });

        return user;
    }

    async authenticate({ email, password }:IRequest): Promise<IResponse>{

        const user = await this.usersRepository.findByEmail(email);

        // verify if user exists
        if (!user) {
            throw new Error("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        // verify if password match 
        if (!passwordMatch) {
            throw new Error("Email or password incorrect");
        }

        // generate token
        const token = sign({}, "d864ac57da5a53b612ab0726a081100d", {
            subject: user.id,
            expiresIn: "1d"
        });

        return {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };
    }


}

export { UsersService }