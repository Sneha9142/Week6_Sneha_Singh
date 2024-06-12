import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Author extends Model {
  public id!: number;
  public name!: string;
  public bio?: string;
  public birthdate?: Date;
  public isSystemUser!: boolean;
}

Author.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  bio: {
    type: new DataTypes.TEXT,
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isSystemUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: 'authors',
  sequelize,
});
