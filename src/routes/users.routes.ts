import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const userRoutes = Router();

const usersController = new UsersController();

userRoutes.post("/", usersController.create);

userRoutes.post("/login", usersController.authenticate);


export { userRoutes }