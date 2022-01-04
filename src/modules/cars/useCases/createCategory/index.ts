import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";


export default () => {

    const categoriesRepository = new CategoriesRepository(); 0

    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
}
