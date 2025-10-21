import { Context } from "hono";
import { formDataToObject } from "../../../../lib/form-data-to-json";
import { InputCreateAnalysisDTO } from "../dtos/create-analysis.dto";
import { CreateAnalysisUseCase } from './create-analysis.use-case';

export class CreateAnalysisController {
  constructor(private usecase: CreateAnalysisUseCase) {
    this.handle = this.handle.bind(this);
  }

  async handle(c: Context) {
    const body = await c.req.formData();
    const formatted = formDataToObject(body);

    const dto = new InputCreateAnalysisDTO();
    dto.userId = formatted.userId;
    dto.email = formatted.email;
    dto.image = formatted.image;

    const result = await this.usecase.execute(dto);

    return c.newResponse(JSON.stringify(result), 201);
  }
}
