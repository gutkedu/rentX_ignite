import { Router } from 'express';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
})

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
})

export { categoriesRoutes };