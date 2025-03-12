import sequelize from '../config/db.config.js'
import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'

const UsersModel = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
})

// Hook to hash the password before saving
UsersModel.beforeSave(async (user) => {
    if (!user.changed('password')) return

    user.password = await bcrypt.hash(user.password, 12)
})

// Instance method to compare passwords
UsersModel.prototype.correctPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

export { UsersModel }
