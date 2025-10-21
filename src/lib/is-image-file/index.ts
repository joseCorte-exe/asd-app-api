import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isImageFile', async: false })
export class IsImageFileConstraint implements ValidatorConstraintInterface {
  validate(file: any) {
    if (!file || !(file instanceof File)) {
      return false;
    }

    // Check if it's an image mime type
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml'
    ];

    if (!allowedMimeTypes.includes(file.type)) {
      return false;
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return false;
    }

    // Check if file has content
    if (file.size === 0) {
      return false;
    }

    return true;
  }

  defaultMessage() {
    return 'File must be a valid image (JPEG, PNG, GIF, WebP, SVG) and smaller than 10MB';
  }
}

export function IsImageFile(validationOptions?: ValidationOptions): PropertyDecorator {
  const decorator: PropertyDecorator = (target, propertyKey) => {
    const propertyName =
      typeof propertyKey === 'symbol' ? propertyKey.toString() : propertyKey;

    registerDecorator({
      name: 'isImageFile',
      target: target.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsImageFileConstraint,
    });
  };

  return decorator;
}