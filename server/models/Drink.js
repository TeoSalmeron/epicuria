module.exports = (sequelize, DataTypes) => {

    const Drink = sequelize.define("Drink", {
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

    return Drink
}