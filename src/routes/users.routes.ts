import { Request, Response, Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";
import { UsersService } from "../services/UsersService";


const userRoutes = Router();

const usersRepository = new UsersRepositoryInMemory();
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

userRoutes.get("/", (request: Request, response: Response)=> {
    response.json({
        message: "List users!"
    });
});

userRoutes.post("/", usersController.create);

userRoutes.post("/login", usersController.authenticate);


export { userRoutes }