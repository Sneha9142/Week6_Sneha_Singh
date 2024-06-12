import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

dotenv.config();

const app = express();
const PORT =  3000;

app.use(express.json());

app.use('/api/users', userRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();
