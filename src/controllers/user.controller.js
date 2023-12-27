"use strict";

import userService from "../services/user.service.js";
import { CreatedSuccessResponse } from "../utils/success.response.js";
import { ErrorResponse } from "../utils/error.response.js";

class UserController {
  signUp = async (req, res, next) => {
    const result = await userService.signUp(req.body);
    
    if (result.error) {
      return new ErrorResponse(result).send(res);
    }

    return new CreatedSuccessResponse({data: result}).send(res);
  };
}

export default new UserController();