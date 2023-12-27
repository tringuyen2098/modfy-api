'use strict';

import StatusCode from "../core/statusCode.js";
import ReasonStatusCode from "../core/reasonPhrase.js";

export class SuccessResponse {
  constructor({ message, statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, data = [] }) {
    this.error = false;
    this.status = statusCode;
    this.message = !message ? reasonStatusCode : message;
    this.data = data;
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

export class CreatedSuccessResponse extends SuccessResponse {
  constructor({ message, statusCode = StatusCode.CREATED, reasonStatusCode = ReasonStatusCode.CREATED, data }) {
    super({ message, statusCode, reasonStatusCode, data });
  }
}