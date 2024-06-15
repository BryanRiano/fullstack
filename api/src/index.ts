import "reflect-metadata";
import {startServer} from './app'
import { connect } from "./config/sequelize";
import { initialize } from "./initialize";

async function main(){
    connect()
    const app = await startServer()
    app.listen(3000)
    // initialize();
}

main();
