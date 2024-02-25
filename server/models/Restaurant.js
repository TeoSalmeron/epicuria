module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define("Restaurant", {
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
        day_close: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        max_capacity: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        noon_service_start: {
            type: DataTypes.TIME,
            allowNull: false 
        },
        noon_service_end: {
            type: DataTypes.TIME,
            allowNull: false 
        },
        evening_service_start: {
            type: DataTypes.TIME,
            allowNull: false 
        },
        evening_service_end: {
            type: DataTypes.TIME,
            allowNull: false 
        }
    })

    return Restaurant
}