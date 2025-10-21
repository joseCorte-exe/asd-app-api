import { d1 } from "../../../../database/d1";
import { D1AnalysisRepository } from "../../repositories/d1-analysis.repository";
import { CreateAnalysisController } from "./create-analysis.controller";
import { CreateAnalysisUseCase } from "./create-analysis.use-case";

const analysisRepository = new D1AnalysisRepository(d1);

const usecase = new CreateAnalysisUseCase(analysisRepository);

export const createAnalysisController = new CreateAnalysisController(usecase);