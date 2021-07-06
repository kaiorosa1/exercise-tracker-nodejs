import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { Exercise } from "../../../entities/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";


class ExercisesRepositoryInMemory implements IExercisesRepository {
    private exercises: Exercise[] =[];
    
    async create({duration, date, user_id, category_id }: ICreateExerciseDTO): Promise<Exercise> {
        const exercise = new Exercise();

        Object.assign(exercise, {
            duration, 
            date, 
            user_id, 
            category_id 
        });

        this.exercises.push(exercise);

        return exercise;
    }

    async findById(id: string): Promise<Exercise> {
        const exercise = this.exercises.find((exercise)=> exercise.id === id);
        return exercise;
    }

}

export { ExercisesRepositoryInMemory}