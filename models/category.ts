import {
  Model, UUIDV4
} from 'sequelize';

interface CategoryAttributes {
  id: number;
  name: string;
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryAttributes> 
    implements CategoryAttributes{
      id!: number;
      name!: string;

    static associate(models: any) {
      Category.hasMany(models.Products)
    }
  };
  Category.init({
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        defaultValue: UUIDV4,
        type: DataTypes.UUID,
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: 'Category',
    });
    return Category;
  };

