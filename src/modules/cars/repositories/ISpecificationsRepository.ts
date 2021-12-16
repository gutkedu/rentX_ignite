import { Specification } from "../model/Specification";

interface ICreateSpeficationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpeficationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpeficationDTO };