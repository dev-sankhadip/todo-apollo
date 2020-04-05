import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo_graphql", "root", "root", {
  host:'localhost',
  dialect:'mysql',
});


sequelize.sync({ force:true })
.then(()=>
{
    console.log("Database and table created");
})