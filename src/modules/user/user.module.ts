import { Hono } from "hono";

export class UserModule {
  constructor(
    private readonly createUserControllerFactory: () => any,
  ) {
    this.configureRoutes = this.configureRoutes.bind(this);
  }

  configureRoutes(app: Hono<HonoType>) {
    app.post('/webhook/users', (c) => {
      const controller = this.createUserControllerFactory();
      return controller.handle(c);
    })
  }
}