import { D1Database } from '@cloudflare/workers-types';
import { d1 } from '../../../database/d1';
import { User, UserRepositoryInterface } from './user-repository.interface';

export class PrismaUserRepository implements UserRepositoryInterface {
  constructor(public db: D1Database) {
    this.db = d1
  }

  async create(user: User): Promise<void> {
    await this.db.prepare(
      'INSERT INTO users (id, firstName, lastName, email) VALUES (?, ?, ?, ?)',
    )
      .bind(user.id, user.firstName, user.lastName, user.email)
      .run()
  }
}