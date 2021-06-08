import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { container } from "tsyringe";

class UsersController {
    
    constructor() { }

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        // call user service 
        const usersService = container.resolve(UsersService);

        const user = await usersService.create({
            name, 
            email, 
            password
        });

        return response.status(201).json(user);
    }

    async authenticate(request: Request, response: Response): Promise<Response>{
        const {email, password } = request.body;

        const usersService = container.resolve(UsersService);

        const authInfo = await usersService.authenticate({email, password});

        return response.status(200).json(authInfo);
    }

}

export { UsersController }