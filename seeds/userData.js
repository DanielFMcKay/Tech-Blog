const { User } = require('../models');
const sequelize = require('../config/connection');

const userData =
    [
        {
            "username": "Edgelord69420",
            "email": "edgymcedgelord@example.com",
            "password": "horsebatterystaple"
        },
        {
            "username": "Vapelord42069",
            "email": "kushmaster42@example.com",
            "password": "itsjusttobacco"
        },
        {
            "username": "Y2J",
            "email": "wallsofjericho@example.com",
            "password": "stepinthearena"
        },
        {
            "username": "SpookyForestWitch",
            "email": "GaiaBoudica@tumblr.net",
            "password": "itsnotaphasemom!"
        }
    ]

const seedUsers = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log("Users seeded!");
};

module.exports = seedUsers;

