'use strict';

import 'dotenv/config'
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import express from 'express';
import cors from 'cors';
import limiter from './middlewares/limiter.js'
import router from "./routes/index.js";
import stackError from './helpers/stackError.js';
import utils from './utils/utils.js';

const app = express();
app.use(cors({
    credentials: true
}));

const delay = parseInt(process.env.DELAY);
app.use((req, res, next) => {
    setTimeout(next, delay);
})


//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(limiter);

// utf8
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/', router);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


// manage errors
app.use((err, req, res, next) => {
    const code = err.status || 500;

    const body = {
        error: true,
        code: code,
        message: err.message || 'Internal Server Error',
        metadata: []
    }

    if(utils.environment() === 'development') {
        body.stack = stackError(err.stack);
    }
    
    return res.status(code).json(body);
});

export default app;