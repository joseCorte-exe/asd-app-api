-- Migration number: 0001 	 2025-10-21T18:11:38.894Z
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_createdAt ON users(createdAt);