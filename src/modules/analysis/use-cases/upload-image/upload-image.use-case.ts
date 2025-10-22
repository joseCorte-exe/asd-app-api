import { R2Object } from '@cloudflare/workers-types';
import { R2 } from '../../../../database/r2';

export class UploadImageUseCase {
  constructor() {}

  async execute(key: string, file: File): Promise<R2Object | undefined> {
    const buffer = await file.arrayBuffer();
    const result = await R2?.put(key.replaceAll(" ", "-"), buffer, {
      httpMetadata: {
        contentType: file.type || "application/octet-stream", // preserva tipo se disponível
      },
    });

    return result;
  }
}