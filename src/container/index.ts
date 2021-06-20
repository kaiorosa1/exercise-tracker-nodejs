import { container } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository/CategoriesRepository";
import { UsersRepository } from "../repositories/implementations/UsersRepository/UsersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);