const Sequelize = require('sequelize');
const connection = require('./connection');

class User extends Sequelize.Model {}

User.init({
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'user',
        underscored: true
    }
);

// try {
//     User.sync().then(() => {
//         return User.create({
//             id: 1,
//             firstName: 'Sateesh',
//             lastName: 'Kumar',
//             userName: 'sateesh.kumar'
//         });
//     });
// } catch(e) {
//     // console.log('record already exists')
// }

module.exports = User;
