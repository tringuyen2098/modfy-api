import knex from 'knex';
import knexCfg from '../configs/knex.config.js';

// class Database {
//     instance;
    
//     constructor() {
//         this.connect();
//     }

//     connect() {
//         return knex(knexCfg);
//     }

//     static getInstance() {
//         if(!Database.instance) {
//             Database.instance = new Database();
//         }
//         return Database.instance;
//     }
// }

// export default Database.getInstance();

// knex only initialized when a new connect
const pgsql = knex(knexCfg);

pgsql.raw("SELECT 1")
.then(() => {
    console.log("PostgreSQL connected");
})
.catch((e) => {
    console.error(e);
    console.log("PostgreSQL not connected");
});


export default knex(knexCfg);