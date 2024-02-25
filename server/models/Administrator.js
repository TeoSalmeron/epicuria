module.exports = (sequelize, DataTypes) => {
    const Administrator = sequelize.define("Administrator", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    })

    return Administrator
}