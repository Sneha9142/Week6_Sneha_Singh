import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Review extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public content!: string;
}

Review.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  content: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'reviews',
  sequelize,
});
