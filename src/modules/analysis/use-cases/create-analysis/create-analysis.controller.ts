import { Context } from "hono";
import { InputCreateAnalysisDTO } from '../dtos/create-analysis.dto';
import { CreateAnalysisUseCase } from './create-analysis.use-case';

export class CreateAnalysisController {
  constructor(private usecase: CreateAnalysisUseCase) {
    this.handle = this.handle.bind(this);
  }

  async handle(c: Context) {
    const body: InputCreateAnalysisDTO = await c.req.json();

    const result = await this.usecase.execute(body);

    return c.newResponse(JSON.stringify(result), 201);
  }
}