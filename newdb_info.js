exports.config = {  
     user: 'postgres', //env var: PGUSER 
     database: 'postgres', //env var: PGDATABASE  
     password: 'susmita',  //env var: PGPASSWORD
     host: 'localhost',  // Server hosting the postgres database
     port: 5432,  //env var: PGPORT 
     max: 10,  // max number of clients in the pool 
     idleTimeoutMillis: 30000,  // how long a client is allowed to remain idle before being closed
   };  