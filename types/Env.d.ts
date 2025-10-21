declare global {
  interface Env {
    DB: D1Database;
    R2: R2Bucket;
    ENVIRONMENT: string;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
      DB: D1Database;
      ENVIRONMENT: string;
    }
  }
}

export { };
