import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory

describe("Create Car", () => {

  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      find_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with the same license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name Car",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        find_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Name Car 2",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        find_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car 2",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      find_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(car.available).toBe(true);
  });
});