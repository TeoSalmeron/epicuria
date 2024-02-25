module.exports = (sequelize, DataTypes) => {
    const MenuDish = sequelize.define("MenuDish", {
        menu_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false 
        },
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return MenuDish
}