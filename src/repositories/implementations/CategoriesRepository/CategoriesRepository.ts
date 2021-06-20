import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";
import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository{
    private repository: Repository<Category>;

    constructor(){
        this.repository = getRepository(Category);
    }   

    async create({name, description}: ICreateCategoryDTO): Promise<Category> {
        const category = this.repository.create({
            name,
            description
        });

        await this.repository.save(category);

        return category;
    }
    
    async findById(id: string): Promise<Category> {
        return this.repository.findOne(id);
    }

}

export { CategoriesRepository }