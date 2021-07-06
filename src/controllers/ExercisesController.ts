import { Request, Response } from "express";
import { container } from "tsyringe";
import { ExercisesService } from "../services/ExercisesService";


class ExercisesController {

    constructor(){}

    async create(request: Request, response: Response){
        const { duration, date, user_id, category_id } = request.body;

        const exercisesService = container.resolve(ExercisesService);

        const exercise = await exercisesService.create({
            duration,
            date,
            user_id,
            category_id
        });

        return response.status(201).json(exercise);
    }

}

export { ExercisesController }