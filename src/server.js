import "./config";
import Database from "./database";
import environment from "./config/environment";
import dbConfig from './config/database';

// IIFE = Immediatly Invoked Function Expression
(async () => {
    try {
        const db = new Database(environment.nodeEnv, dbConfig);
        await db.connect();
        
    } catch (err) {
        console.log('Something went wrong when initializing the server \n',
            err.stack
        );
    }
})();