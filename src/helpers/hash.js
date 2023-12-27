'use strict';

import bcrypt from 'bcrypt';

const saltRound = parseInt(process.env.GEN_SALT);

export async function hash(password) {
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(password, salt);
}

export function compare(password, userPassword) {
    return bcrypt.compare(password, userPassword);
}
