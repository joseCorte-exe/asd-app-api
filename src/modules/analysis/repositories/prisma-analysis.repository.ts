import { prisma } from '../../../database/prisma';
import { Analysis, AnalysisRepositoryInterface } from './analysis-repository.interface';

export class PrismaAnalysisRepository implements AnalysisRepositoryInterface {
  async create(analysis: Analysis): Promise<void> {
    // TODO: Implement create method
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Analysis | null> {
    // TODO: Implement findById method
    throw new Error('Method not implemented');
  }

  async update(id: string, data: Partial<Analysis>): Promise<void> {
    // TODO: Implement update method
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO: Implement delete method
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Analysis[]> {
    // TODO: Implement findAll method
    throw new Error('Method not implemented');
  }
}