import { Request, Response, Router } from "express";
import { UsersController } from "../controllers/UsersController";


const userRoutes = Router();

const usersController = new UsersController();

userRoutes.get("/", (request: Request, response: Response)=> {
    response.json({
        message: "List users!"
    });
});

userRoutes.post("/", usersController.create);

userRoutes.post("/login", (request: Request, response: Response)=> {
    response.json({
        message: "Autenticate user!"
    });
});


export { userRoutes }