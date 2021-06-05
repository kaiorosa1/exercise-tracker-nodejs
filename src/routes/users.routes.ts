import { Request, Response, Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";
import { UsersService } from "../services/UsersService";

const userRoutes = Router();

const usersRepository = UsersRepositoryInMemory.getInstance();
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

userRoutes.post("/", (request: Request, response: Response)=>{
    return usersController.create(request, response);
});

userRoutes.post("/login", (request: Request, response: Response)=> {
    return usersController.authenticate(request, response);
});


export { userRoutes }