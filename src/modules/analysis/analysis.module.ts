import { Hono } from "hono";

export class AnalysisModule {
  constructor(
    private readonly createAnalysisControllerFactory: () => any,
  ) {
    this.configureRoutes = this.configureRoutes.bind(this);
  }

  configureRoutes(app: Hono<HonoType>) {
    app.post('/analysis', (c) => {
      const controller = this.createAnalysisControllerFactory();
      return controller.handle(c);
    });
  }
}