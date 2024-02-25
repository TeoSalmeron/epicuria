module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define("Reservation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email_by: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        phone_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        res_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        res_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
    })

    return Reservation
}