import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";
import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const user = new Category();

        Object.assign(user, { name, description });

        this.categories.push(user);

        return user;
    }


    async findById(id: string): Promise<Category> {
        const category = this.categories.find((category) => category.id === id);
        return category;
    }
}

export { CategoriesRepositoryInMemory }