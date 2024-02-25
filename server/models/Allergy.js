module.exports = (sequelize, DataTypes) => {
    const Allergy = sequelize.define("Allergy", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true  
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    })

    return Allergy
}