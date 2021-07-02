import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { Exercise } from "../../../entities/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";


class ExercisesRepository implements IExercisesRepository{
    
    create(data: ICreateExerciseDTO): Promise<Exercise> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Exercise> {
        throw new Error("Method not implemented.");
    }

}

export { ExercisesRepository }