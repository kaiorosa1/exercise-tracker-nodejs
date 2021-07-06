interface ICreateExerciseDTO {
    id?: string;
    duration: string;
    date: Date;
    user_id: string;
    category_id: string;
}

export { ICreateExerciseDTO }