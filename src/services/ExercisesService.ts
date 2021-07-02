import { inject, injectable } from "tsyringe";
import { Exercise } from "../entities/Exercise";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
class CategoriesService {
    constructor(
        @inject("ExercisesRepository")
        private exercisesRepository: IExercisesRepository
    ) { }

    async create({  }: ICreateExerciseDTO): Promise<Exercise> {

        const exercise = await this.exercisesRepository.create({  });

        return exercise;

    }

}

export { CategoriesService }