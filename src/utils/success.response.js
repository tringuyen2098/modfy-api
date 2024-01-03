'use strict';

import StatusCode from "../core/statusCode.js";
import ReasonStatusCode from "../core/reasonPhrase.js";

export class SuccessResponse {
  constructor({ message, statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = [] }) {
    this.error = false;
    this.code = statusCode;
    this.message = !message ? reasonStatusCode : message;
    this.metadata = metadata;
  }

  send(res, headers = {}) {
    return res.status(this.code).json(this);
  }
}

export class CreatedSuccessResponse extends SuccessResponse {
  constructor({ message, statusCode = StatusCode.CREATED, reasonStatusCode = ReasonStatusCode.CREATED, metadata }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}