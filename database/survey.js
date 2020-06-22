const Sequelize = require('sequelize');
const connection = require('./connection');

class Survey extends Sequelize.Model {}

Survey.init({
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'surveys',
        underscored: true,
    }
);


// try {
//     Survey.sync().then(() => {
//         const date = new Date();
//         date.setHours(date.getHours() + (24 * 7)); // A week expiry time

//         return Survey.create({
//             id: 1,
//             name: 'EduFund',
//             status: true,
//             startDate: new Date(),
//             endDate: date
//         });
//     });
// } catch(e) {
//     // console.log('record already exists')
// }

module.exports = Survey;