import knex from 'knex';
import knexCfg from '../configs/knex.config.js';

// class Database {

//     constructor() {
//         this.connect();
//     }

//     connect() {
//         this.instance = knex(knexCfg);

//         // check connect
//         this.instance.raw("SELECT 1")
//         .then(() => {
//             console.log("PostgreSQL connected");
//         })
//         .catch((e) => {
//             console.error(e);
//             console.log("PostgreSQL not connected");
//         });

//         return this.instance;
//     }
    
//     getInstance() {
//         if(!this.instance) {
//             this.instance = new Database();
//         }
        
//         return this.instance;
//     }
// }

// can't sugguest code
// export default new Database().getInstance();

knex(knexCfg).raw("SELECT 1")
.then(() => {
    console.log("PostgreSQL connected");
})
.catch((e) => {
    console.error(e);
    console.log("PostgreSQL not connected");
});


export default knex(knexCfg);