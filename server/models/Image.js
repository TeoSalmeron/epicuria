module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true  
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Image
}