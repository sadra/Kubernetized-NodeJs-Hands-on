import { ValidationError } from 'express-validator';
import { CustomError } from './Custom.error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public erros: ValidationError[]) {
    super('Invalid request parameters.');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializedErrors() {
    return this.erros.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
