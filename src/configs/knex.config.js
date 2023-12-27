'use strict';

import utils from '../utils/utils.js';
import dotenv from "dotenv";

dotenv.config({
    path: '../../.env'
})

const env = process.env;

const config = {
    development: {
        client: env.DEV_DB_CLIENT,
        connection: {
            host: env.DEV_DB_HOST,
            user: env.DEV_DB_USER,
            password: env.DEV_DB_PASS,
            database: env.DEV_DB_NAME,
            port: parseInt(env.DEV_DB_PORT)
        },
        pool: {
            min: 2,
            max: parseInt(env.DEV_DB_POOL_MAX)
        },
        useNullAsDefault: true
    },
    production: {
        client: env.PROD_DB_CLIENT,
        connection: {
            host: env.PROD_DB_HOST,
            user: env.PROD_DB_USER,
            password: env.PROD_DB_PASS,
            database: env.PROD_DB_NAME,
            port: parseInt(env.PROD_DB_PORT)
        },
        pool: {
            min: 2,
            max: parseInt(env.PROD_DB_POOL_MAX)
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
}

export default config[utils.environment()];