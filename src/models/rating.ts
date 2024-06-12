import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Rating extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public rating!: number;
}

Rating.init({
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
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'ratings',
  sequelize,
});
