module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("Menu", {
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
        }
    })

    return Menu
}