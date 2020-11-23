import { CustomError } from './Custom.error';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(message: string = 'Bad request') {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializedErrors() {
    return [{ message: this.message }];
  }
}
