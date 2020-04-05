import mysql from 'mysql';
import { promisify } from 'util';

export const connection=mysql.createPool({
    host:'localhost',
    database:'todo_graphql',
    user:'root',
    password:'root'
})

export const query=promisify(connection.query).bind(connection);