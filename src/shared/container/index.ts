import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/Implementations/CategoriesRepository"


// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);