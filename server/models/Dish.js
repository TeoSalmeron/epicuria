module.exports = (sequelize, DataTypes) => {
    const Dish = sequelize.define("Dish", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true  
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        price: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false 
        }
    })

    return Dish
}