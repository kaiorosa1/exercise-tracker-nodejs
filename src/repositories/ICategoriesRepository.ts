import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepository {
    create(data: ICreateCategoryDTO): Promise<Category>;
    findById(id: string): Promise<Category>;
}

export { ICategoriesRepository }