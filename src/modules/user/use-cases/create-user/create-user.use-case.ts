import { UserRepositoryInterface } from '../../repositories/user-repository.interface';
import { InputCreateUserDTO } from '../dtos/create-user.dto';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async execute(input: InputCreateUserDTO): Promise<void> {
    console.log(input)
    await this.userRepository.create(input)
  }
}
