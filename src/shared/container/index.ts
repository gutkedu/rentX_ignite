import { container } from "tsyringe";

import { UsersRepository } from "@modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/repositories/Implementations/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/Implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);