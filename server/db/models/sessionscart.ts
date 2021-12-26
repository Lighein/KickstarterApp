import {
  Model
} from 'sequelize';

interface CartAttributes {
  id: number;
  amount: number;
  ProductId: number;
  SessionId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<CartAttributes> 
    implements CartAttributes{
      id!: number;
      amount!: number;
      ProductId!: number;
      SessionId!: number;

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
    ProductId: { 
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      }},
    SessionId: { 
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sessions',
        key: 'id'
      }},
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};