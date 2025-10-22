import { d1 } from "../../../../database/d1";
import { PrismaUserRepository } from "../../repositories/d1-user.repository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.use-case";

export function createUserController() {
  const userRepository = new PrismaUserRepository(d1);
  const usecase = new CreateUserUseCase(userRepository);
  return new CreateUserController(usecase);
}