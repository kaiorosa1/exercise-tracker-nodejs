import { getRepository, Repository } from "typeorm";
import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { Exercise } from "../../../entities/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";


class ExercisesRepository implements IExercisesRepository{
    private repository: Repository<Exercise>;

    constructor(){
        this.repository = getRepository(Exercise);
    }   
    async create({duration, date, user_id, category_id, id }: ICreateExerciseDTO): Promise<Exercise> {
        const exercise = this.repository.create({
           duration,
           date,
           user_id,
           category_id,
           id
        });

        await this.repository.save(exercise);

        return exercise;
    }
    async findById(id: string): Promise<Exercise> {
        return this.repository.findOne(id);
    }

}

export { ExercisesRepository }