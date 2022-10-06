import "./config";
import Database from "./database";
import environment from "./config/environment";


// IIFE = Immediatly Invoked Function Expression
(async () => {
    try {
        const dbConfig = Database.dbConfig; 
        const db = new Database(environment.nodeEnv, dbConfig);
        await db.connect();
        
        const App = require('./app').default;
        const app= new App();
        app.listen();
        
    } catch (err) {
        console.log('Something went wrong when initializing the server \n',
            err.stack
        );
    }
})();