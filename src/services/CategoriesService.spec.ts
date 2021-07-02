import { CategoriesRepositoryInMemory } from "../repositories/implementations/CategoriesRepository/CategoriesRepositoryInMemory";
import { CategoriesService } from "./CategoriesService";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let categoriesService: CategoriesService;

describe("Create a new category", () => {
    
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        categoriesService = new CategoriesService(categoriesRepositoryInMemory);
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Running",
            description: "Running Category"
        }

        const result = await categoriesService.create(category);

        expect(result).toHaveProperty("id");
    });
});