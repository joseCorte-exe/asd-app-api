import { D1Database } from '@cloudflare/workers-types';
import { d1 } from '../../../database/d1';
import { Analysis, AnalysisRepositoryInterface } from './analysis-repository.interface';

export class D1AnalysisRepository implements AnalysisRepositoryInterface {
  constructor(public db: D1Database) {
    this.db = d1
  }

  async create(analysis: Analysis): Promise<void> {
    await this.db.prepare(
      'INSERT INTO analyses (id, userId, imageUrl, result, status) VALUES (?, ?, ?, ?, ?)',
    )
      .bind(
        analysis.id,
        analysis.userId,
        analysis.imageUrl,
        analysis.result,
        analysis.status,
      )
      .run()
  }
}
