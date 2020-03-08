import mysql from 'mysql';

export const connection = mysql.createPool({
    host: 'localhost',
    database: 'todo_graphql',
    user: 'root',
    password: 'root'
})