import {
  Model, UUIDV4
} from 'sequelize';

interface ProductsAttributes {
  id: number;
  // UserId: number;
  // CategoryId: number;
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
      // UserId!: number;
      // CategoryId!: number;
      created!: Date;
      status!: string;
      name!: string;
      description!: string;
      total_amount!: number;

    static associate(models: any) {
      // Products.belongsTo(models.User);
      // Products.belongsTo(models.Category);
      // Products.belongsToMany(models.Sessions, {
      //   through: 'Cart'
      // });
    }
  };

  Products.init({
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // UserId: {
      //   allowNull: false,
      //   type: DataTypes.UUID,
      //   references: {
      //     model: 'User',
      //     key: 'id',
      //   }
      // },
      // CategoryId: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Category',
      //     key: 'id',
      //   }
      // },
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
  


