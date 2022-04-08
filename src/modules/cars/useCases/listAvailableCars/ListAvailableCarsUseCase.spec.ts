import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able to list all available cars by brand", async () => {

    const car1 = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car1]);
  });


  it("should be able to list all available cars by brand", async () => {

    const car2 = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1234",
      fine_amount: 50,
      brand: "Car Brand Test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car brand",
    });

    expect(cars).toEqual([car2]);
  });

  it("should be able to list all available cars by name", async () => {

    const car3 = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1235",
      fine_amount: 50,
      brand: "Car Brand Test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car3]);
  })

  it("should be able to list all available cars by category", async () => {

    const car4 = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car description",
      daily_rate: 100,
      license_plate: "DEF-1236",
      fine_amount: 50,
      brand: "Car Brand Test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car4]);
  })
})