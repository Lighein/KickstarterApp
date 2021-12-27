import {
  Model
} from 'sequelize';

interface CartAttributes {
  id: number;
  amount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<CartAttributes> 
    implements CartAttributes{
      id!: number;
      amount!: number;

    static associate(models: any) {
    }
  };
  
  Cart.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    amount: {
      allowNull: true,
      defaultValue: 0,
      type: DataTypes.FLOAT,
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};