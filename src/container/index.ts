import { container } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { IExercisesRepository } from "../repositories/IExercisesRepository";
import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository/CategoriesRepository";
import { ExercisesRepository } from "../repositories/implementations/ExercisesRepository/ExercisesRepository";
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

container.registerSingleton<IExercisesRepository>(
    "ExercisesRepository",
    ExercisesRepository
);