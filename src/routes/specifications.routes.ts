import { Router } from "express";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";




const specificationsRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpeficiationController.handle);

export { specificationsRoutes };