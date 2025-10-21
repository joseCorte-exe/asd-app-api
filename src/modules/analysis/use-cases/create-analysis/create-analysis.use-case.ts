import cuid from 'cuid';
import { AnalysisRepositoryInterface } from '../../repositories/analysis-repository.interface';
import { InputCreateAnalysisDTO } from '../dtos/create-analysis.dto';

export class CreateAnalysisUseCase {
  constructor(
    private readonly analysisRepository: AnalysisRepositoryInterface,
  ) {}

  async execute(input: InputCreateAnalysisDTO): Promise<void> {
    await this.analysisRepository.create({
      id: cuid(),
      userId: input.userId,
      imageUrl: input.imageUrl,
      result: '',
      createdAt: input.createdAt,
      status: 'PENDING',
    });
  }
}