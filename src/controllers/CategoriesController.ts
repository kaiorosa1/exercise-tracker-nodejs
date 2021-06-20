import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoriesService } from "../services/CategoriesService";


class CategoriesController {

    constructor(){}

    async create(request: Request, response: Response){
        const { name, description } = request.body;

        const categoriesService = container.resolve(CategoriesService);

        const user = await categoriesService.create({
            name, 
            description
        });

        return response.status(201).json(user);
    }

}

export { CategoriesController }