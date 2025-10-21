import { D1Database } from '@cloudflare/workers-types';
import { d1 } from '../../../database/d1';
import { Analysis, AnalysisRepositoryInterface } from './analysis-repository.interface';

export class D1AnalysisRepository implements AnalysisRepositoryInterface {
  constructor(public db: D1Database) {
    console.log("d1", d1)
    this.db = d1
  }

  async create(analysis: Analysis): Promise<void> {
    console.log("aqui", this.db)
  }
}
