import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Book extends Model {
  public id!: number;
  public bookCode!: string;
  public title!: string;
  public description?: string;
  public publishedYear?: number;
  public price!: number;
  public externalId?: string;
}

Book.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  bookCode: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.TEXT,
    allowNull: true,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  externalId: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
}, {
  tableName: 'books',
  sequelize,
});
