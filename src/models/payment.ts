import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Payment extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  public status!: 'pending' | 'completed' | 'failed';
  public createdAt!: Date;
}

Payment.init({
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
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'payments',
  sequelize,
});
