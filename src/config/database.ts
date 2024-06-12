import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error connecting data", err);
  });

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Unable to synchronize the database:", error.message);
    console.error(error.stack);
  });

export default sequelize;



