'use strict';
import { Router } from "express";
import {SuccessResponse } from '../utils/success.response.js'
import usersRouter from './users/user.router.js';

const router = Router();

router.get('/',  (req, res) => {
    new SuccessResponse({
        message: 'Welcome to Modfy API'
    }).send(res);
})


router.use('/v1/api', usersRouter)

export default router;