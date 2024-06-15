import path from 'path'
import { Sequelize } from 'sequelize-typescript'

/* const name = process.env.DB_NAME
const user = process.env.DB_USER
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD */

export async function connect() {
    const connection = new Sequelize({
        dialect: "postgres", 
        host: "localhost", 
        username: "postgres", 
        password: "", 
        database: "fullstack-api", 
        logging: false, 
        models: [path.join(__dirname, '../entities/**/**.ts')]
      });
    await connection.sync();
}