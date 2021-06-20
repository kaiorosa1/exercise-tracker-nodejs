import { inject, injectable } from "tsyringe";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
class CategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {

        const category = await this.categoriesRepository.create({ name, description });

        return category;

    }

}

export { CategoriesService }