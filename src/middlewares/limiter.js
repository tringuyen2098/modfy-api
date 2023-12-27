'use strict';

import rateLimit from "express-rate-limit";

export default rateLimit({
    windowMs: process.env.MIN_REQUEST * 60 * 1000,
    max: process.env.LIMIT_REQUEST,
    statusCode: 429,
    message: {
      error: true,
      code: 429,
      msg: 'Too many requests'
    }
});
