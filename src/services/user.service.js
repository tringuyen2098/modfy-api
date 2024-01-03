'use strict';

import crypto from 'node:crypto';
import role from "../core/role.js";
import userModel from "../models/user.model.js";
import utils from "../utils/utils.js";
import {hash} from "../helpers/hash.js";


import { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } from '../utils/error.response.js';

class UserService {
  signUp = async (payload) => {
    try {
        const { email, password, firstName, lastName, phoneNumber } = payload;
        
        if(!utils.regexEmail(email)) {
            throw new BadRequestError('Email invalid.');
        }

        if(!utils.regexPhone(phoneNumber)) {
            throw new BadRequestError('Phone invalid');
        }

        const userExists = await userModel.find({ email });

        // check user exists
        if (userExists && userExists.length > 0) {
            throw new BadRequestError('User already registered.');
        }

        const passwordHash = await hash(password);
        const newUser = await userModel.create({
            email,
            password: passwordHash,
            firstName,
            lastName,
            phoneNumber,
            roles: [role.GUEST]
        })

        if(!newUser || !newUser.length) {
            throw new BadRequestError('Create User Failed.');
        }

        const privateKey = crypto.randomBytes(64).toString("hex");
        const publicKey = crypto.randomBytes(64).toString("hex");
        
        return newUser;
        
    } catch (error) {
        throw error;
    }
  };
}

export default new UserService();
