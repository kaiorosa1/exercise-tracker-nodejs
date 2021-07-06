import { inject, injectable } from "tsyringe";
import { ICreateExerciseDTO } from "../dtos/ICreateExerciseDTO";
import { Exercise } from "../entities/Exercise";
import { IExercisesRepository } from "../repositories/IExercisesRepository";

@injectable()
class ExercisesService {
    constructor(
        @inject("ExercisesRepository")
        private exercisesRepository: IExercisesRepository
    ) { }

    async create({ duration, date, user_id, category_id }: ICreateExerciseDTO): Promise<Exercise> {

        const exercise = await this.exercisesRepository.create({ duration, date, user_id, category_id });

        return exercise;

    }

}

export { ExercisesService }