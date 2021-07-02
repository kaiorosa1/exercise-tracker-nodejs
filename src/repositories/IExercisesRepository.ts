import { ICreateExerciseDTO } from "../dtos/ICreateExerciseDTO";
import { Exercise } from "../entities/Exercise";

interface IExercisesRepository {
    create(data: ICreateExerciseDTO): Promise<Exercise>;
    findById(id: string): Promise<Exercise>;
}

export { IExercisesRepository }