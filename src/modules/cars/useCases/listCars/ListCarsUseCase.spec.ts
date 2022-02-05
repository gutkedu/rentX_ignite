import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able to list all available cars", async () => {

    const car1 = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car1]);
  });


  it("should be able to list all available cars by name", async () => {

    const car2 = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1234",
      fine_amount: 50,
      brand: "Car Brand Test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car brand",
    });

    expect(cars).toEqual([car2]);
  });
});