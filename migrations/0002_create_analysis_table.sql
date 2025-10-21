-- Migration number: 0002 	 2025-10-21T18:12:03.303Z
CREATE TABLE analyses (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  result TEXT DEFAULT '',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED')) DEFAULT 'PENDING',
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_analyses_userId ON analyses(userId);
CREATE INDEX idx_analyses_status ON analyses(status);
CREATE INDEX idx_analyses_createdAt ON analyses(createdAt);