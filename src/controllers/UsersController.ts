import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {

    constructor() { }
    
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        // creating a new user 
        const usersService = new UsersService(); // should this be injected or instantiated?

        const user = await usersService.create({name, email, password});

        // call user service 
        return response.status(201).json(user);
    }


}

export { UsersController }