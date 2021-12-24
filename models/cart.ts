import {
  Model
} from 'sequelize';

interface CartAttributes {
  id: number;
  // ProductsId: number;
  // SessionId: number;
  amount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<CartAttributes> 
    implements CartAttributes{
      id!: number;
      // ProductsId!: number;
      // SessionId!: number;
      amount!: number;

    static associate(models: any) {
    }
  };
  Cart.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    // ProductsId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Products',
    //     key: 'id',
    //   }
    // },
    // SessionId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Sessions',
    //     key: 'id',
    //   }
    // },
    amount: {
      allowNull: true,
      type: DataTypes.FLOAT,
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};