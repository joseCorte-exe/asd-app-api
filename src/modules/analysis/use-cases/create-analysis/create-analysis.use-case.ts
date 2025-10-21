import { InputCreateAnalysisDTO } from '../dtos/create-analysis.dto';
import { AnalysisRepositoryInterface } from '../../repositories/analysis-repository.interface';

export class CreateAnalysisUseCase {
  constructor(
    private readonly analysisRepository: AnalysisRepositoryInterface,
  ) {}

  async execute(input: InputCreateAnalysisDTO): Promise<void> {
    // TODO: Implement create-analysis logic
    throw new Error('Method not implemented');
  }
}