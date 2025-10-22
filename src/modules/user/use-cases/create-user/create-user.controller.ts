import { Context } from "hono";
import { InputCreateUserDTO } from '../dtos/create-user.dto';
import { CreateUserUseCase } from './create-user.use-case';

type WebHookCreateUserInput = {
  data: {
    id: string,
    first_name: InputCreateUserDTO['firstName'],
    last_name: InputCreateUserDTO['lastName'],
    email_addresses: { email_address: InputCreateUserDTO['email'] }[],
  },
  type: string
}

export class CreateUserController {
  constructor(private usecase: CreateUserUseCase) {
    this.handle = this.handle.bind(this);
  }

  async handle(c: Context) {
    const body: WebHookCreateUserInput = await c.req.json();

    if (body.type !== 'user.created') {
      return c.newResponse('Event type not supported', 400);
    }

    const data: InputCreateUserDTO = {
      id: body.data.id,
      firstName: body.data.first_name,
      lastName: body.data.last_name,
      email: body.data.email_addresses[0].email_address,
    }

    const result = await this.usecase.execute(data);

    return c.newResponse(JSON.stringify(result), 201);
  }
}