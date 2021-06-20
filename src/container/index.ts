import { container } from "tsyringe";
import { UsersRepository } from "../repositories/implementations/UsersRepository/UsersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);