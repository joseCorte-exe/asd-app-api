import { Hono } from "hono";
import { CreateAnalysisController } from "./use-cases/create-analysis/create-analysis.controller";

export class AnalysisModule {
  constructor(
    private readonly createAnalysisController: CreateAnalysisController,
  ) {
    this.configureRoutes = this.configureRoutes.bind(this);
  }

  configureRoutes(app: Hono<HonoType>) {
    app.post('/analysis', this.createAnalysisController.handle);
  }
}