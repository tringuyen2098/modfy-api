"use strict";

import userService from "../services/user.service.js";
import { CreatedSuccessResponse } from "../utils/success.response.js";

class UserController {
  signUp = async (req, res, next) => {
    new CreatedSuccessResponse({
      metadata: await userService.signUp(req.body)
    }).send(res);
  };
}

export default new UserController();