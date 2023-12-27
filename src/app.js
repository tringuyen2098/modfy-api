'use strict';

import 'dotenv/config'
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import express from 'express';
import cors from 'cors';
import limiter from './middlewares/limiter.js'
import router from "./routes/index.js";

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
    const statusCode = err.status || 500;
    return res.status(statusCode).json({
        error: true,
        code: statusCode,
        stack: err.stack,
        message: err.message || 'Internal Server Error',
    });
});

export default app;