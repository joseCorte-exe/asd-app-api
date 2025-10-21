import { PrismaAnalysisRepository } from "../../repositories/prisma-analysis.repository";
import { CreateAnalysisController } from "./create-analysis.controller";
import { CreateAnalysisUseCase } from "./create-analysis.use-case";

const analysisRepository = new PrismaAnalysisRepository();

const usecase = new CreateAnalysisUseCase(analysisRepository);

export const createAnalysisController = new CreateAnalysisController(usecase);