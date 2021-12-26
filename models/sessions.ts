import {
  Model
} from 'sequelize';

interface SessionsAttributes {
    id: number;
    // UserId: number;
    total: number;
    status: string;
    date: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Sessions extends Model<SessionsAttributes> 
    implements SessionsAttributes{
      id!: number;
      // UserId!: number;
      total!: number;
      status!: string;
      date!: Date;

    static associate(models: any) {
      Sessions.belongsTo(models.User);
      Sessions.belongsToMany(models.Products, {
        through: 'Cart'
      });
    }
  };

  Sessions.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    // UserId: {
    //   allowNull: false,
    //   type: DataTypes.UUIDV4,
    //   references: {
    //     model: 'User',
    //     key: 'id',
    //   }
    // },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'empty',
      validate: { isIn: [["cart", "donated", "empty"]] },
    },
    date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Sessions',
  });
  return Sessions;
};
