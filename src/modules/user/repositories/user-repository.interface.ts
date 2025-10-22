export interface UserRepositoryInterface {
  create(user: User): Promise<void>;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};