'use strict';

import table from '../core/table.js';
import knex from '../databases/knex.js';
import utils from '../utils/utils.js';

class UserModel {
    async find({userId, email}) {
        let sql = knex(table.users);

        if(userId) {
            sql.where('userId', userId);
        }

        if(email) {
            sql.where('email', email);
        }

        return await sql;
    }

    create(payload) {
        const column = ['userId'];
        return knex(table.users).returning(column).insert(payload);
    }

    update(payload) {
        payload.createdAt = utils.defaultNow();
        return knex(table.users).where('userId', payload.userId).update(payload);
    }
}

export default new UserModel();