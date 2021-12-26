import {
  Model
} from 'sequelize';

interface SessionsAttributes {
    id: number;
    total: number;
    status: string;
    date: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Sessions extends Model<SessionsAttributes> 
    implements SessionsAttributes{
      id!: number;
      total!: number;
      status!: string;
      date!: Date;

    static associate(models: any) {
      Sessions.belongsToMany(models.Products, {
        through: 'Cart'
      });
      Sessions.belongsTo(models.User);
    }
  };

  Sessions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'empty',
      validate: { isIn: [["cart", "donated", "empty"]] },
    },
    date: {
      allowNull: true,
      defaultValue: Date.now(),
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Sessions',
  });
  return Sessions;
};
