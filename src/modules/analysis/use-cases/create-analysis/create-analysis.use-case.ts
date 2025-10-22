import cuid from 'cuid';
import { AnalysisRepositoryInterface } from '../../repositories/analysis-repository.interface';
import { InputCreateAnalysisDTO } from '../dtos/create-analysis.dto';
import { UploadImageUseCase } from '../upload-image/upload-image.use-case';

export class CreateAnalysisUseCase {
  constructor(
    private readonly analysisRepository: AnalysisRepositoryInterface,
  ) {}

  async execute(input: InputCreateAnalysisDTO): Promise<void> {
    const uploadUseCase = new UploadImageUseCase()
    const imageKey = `${input.image.name}-${input.userId}-${cuid()}`

    try {
      const result = await uploadUseCase.execute(imageKey, input.image)
    } catch (error) {
      console.error("error while uploading image", error)
    }

    await this.analysisRepository.create({
      id: cuid(),
      userId: input.userId,
      imageUrl: imageKey,
      result: '',
      createdAt: new Date(),
      status: 'PENDING',
    })
  }
}
