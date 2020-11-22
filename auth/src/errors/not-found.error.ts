import { CustomError } from './Custom.error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializedErrors() {
    return [{ message: 'Not Found' }];
  }
}
