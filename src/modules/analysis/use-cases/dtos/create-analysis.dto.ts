import { IsUserObject } from '../../../../lib/is-user-object/index.js';
import { IsImageFile } from '../../../../lib/is-image-file/index.js';

type User = {
  id: string;
  email: string;
}

export class InputCreateAnalysisDTO {
  @IsUserObject()
  user!: User;

  @IsImageFile()
  image!: File;
}