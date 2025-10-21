import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isUserObject', async: false })
export class IsUserObjectConstraint implements ValidatorConstraintInterface {
  validate(user: any) {
    if (!user || typeof user !== 'object') {
      return false;
    }

    const { id, email } = user;

    // Validate id
    if (!id || typeof id !== 'string' || id.trim().length === 0) {
      return false;
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  }

  defaultMessage() {
    return 'User object must have a valid id (non-empty string) and email (valid email format)';
  }
}

export function IsUserObject(validationOptions?: ValidationOptions): PropertyDecorator {
  const decorator: PropertyDecorator = (target, propertyKey) => {
    const propertyName =
      typeof propertyKey === 'symbol' ? propertyKey.toString() : propertyKey;

    registerDecorator({
      name: 'isUserObject',
      target: target.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserObjectConstraint,
    });
  };

  return decorator;
}
