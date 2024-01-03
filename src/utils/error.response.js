'use strict';

import StatusCode from "../core/statusCode.js";
import ReasonStatusCode from "../core/reasonPhrase.js";

export class Errors extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export class ConflictRequestError extends Errors {
  constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.FORBIDDEN) {
    super(message, statusCode);
  }
}

export class BadRequestError extends Errors {
  constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.BAD_REQUEST) {
    super(message, statusCode);
  }
}

export class AuthFailureError extends Errors {
  constructor(message = ReasonStatusCode.UNAUTHORIZED, statusCode = StatusCode.UNAUTHORIZED) {
    super(message, statusCode);
  }
}

export class NotFoundError extends Errors {
  constructor(message = ReasonStatusCode.NOT_FOUND, statusCode = StatusCode.NOT_FOUND) {
    super(message, statusCode);
  }
}

export class ForbiddenError extends Errors {
  constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN) {
    super(message, statusCode);
  }
}
