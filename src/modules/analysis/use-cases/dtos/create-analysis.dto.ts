import { IsString } from 'class-validator';
import { IsImageFile } from '../../../../lib/is-image-file/index.js';

export class InputCreateAnalysisDTO {
  @IsString()
  userId!: string;

  @IsString()
  email!: string;

  @IsImageFile()
  image!: File;
}