import { Request, Response } from "express";
import { hash } from "bcrypt";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UsersService } from "../services/UsersService";

class UsersController {
    
    constructor(private usersService: UsersService) { }

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        // creating a new user 

        const userAlreadyExists = await this.usersService.findByEmail(email);
        
        if (userAlreadyExists) {
            throw new Error("User already exits!");
        }

        // improve salt
        const passwordHashed = await hash(password, 8);

        // call user service 
        const user = await this.usersService.create({
            name, 
            email, 
            password: passwordHashed
        });

        return response.status(201).json({});
    }

    async authenticate(request: Request, response: Response): Promise<Response>{
        const {email, password } = request.body;

        const user = await this.usersService.findByEmail(email);

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

        return response.status(200).json({
            user: {
                name: user.name,
                email: user.email
            },
            token    
        });
    }

}

export { UsersController }