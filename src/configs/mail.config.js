'use strict';

const env = process.env;

export default {
    host: env.DEV_MAIL_HOST,
    port: env.DEV_MAIL_PORT,
    secure: false,
    auth: {
        user: env.DEV_MAIL_USER,
        pass: env.DEV_MAIL_PASS
    }
}