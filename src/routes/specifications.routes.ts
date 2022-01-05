import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpeficiationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpeficiationController.handle);

export { specificationsRoutes };