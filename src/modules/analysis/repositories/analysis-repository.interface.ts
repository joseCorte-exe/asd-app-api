export interface AnalysisRepositoryInterface {
  create(analysis: Analysis): Promise<void>;
}

export type Analysis = {
  id: string,
  userId: string,
  imageUrl: string,
  result: string,
  createdAt: Date,
  status: AnalysisStatus,
};

export type AnalysisStatus = 'PENDING' | 'COMPLETED' | 'FAILED';