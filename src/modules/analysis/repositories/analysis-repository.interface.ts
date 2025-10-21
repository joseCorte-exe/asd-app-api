export interface AnalysisRepositoryInterface {
  create(analysis: Analysis): Promise<void>;
  findById(id: string): Promise<Analysis | null>;
  update(id: string, data: Partial<Analysis>): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Analysis[]>;
}

export type Analysis = {
  id: string;
  // TODO: Add entity properties
  createdAt: Date;
  updatedAt: Date;
};