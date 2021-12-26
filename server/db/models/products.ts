import {
  Model, UUIDV4
} from 'sequelize';

interface ProductsAttributes {
  id: number;
  created: Date;
  status: string;
  name: string;
  description: string;
  total_amount: number;
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Products extends Model<ProductsAttributes> 
    implements ProductsAttributes{
      id!: number;
      created!: Date;
      status!: string;
      name!: string;
      description!: string;
      total_amount!: number;

    static associate(models: any) {
      Products.belongsToMany(models.Sessions, {
        through: 'Cart'
      });
      Products.belongsTo(models.User);
      Products.belongsTo(models.Category);
    }
  };

  Products.init({
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      created: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'Need more investments',
        validate: { 
          isIn: [['Need more investments', "Implementation", "Renovating", "Waiting for approvement"]] 
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      total_amount: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
    }, {
      sequelize,
      modelName: 'Products',
    });
    return Products;
  };
  


