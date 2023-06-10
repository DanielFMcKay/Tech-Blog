const { User } = require('../models');

const userData =
[
    {
        "user_name": "Edgelord69420",
        "email": "edgymcedgelord@example.com",
        "password": "horsebatterystaple"
    },
    {
        "user_name": "Vapelord42069",
        "email": "kushmaster42@example.com",
        "password": "itsjusttobacco"
    },
    {
        "user_name": "Y2J",
        "email": "wallsofjericho@example.com",
        "password": "stepinthearena"
    },
    {
        "user_name": "SpookyForestWitch",
        "email": "GaiaBoudica@tumblr.net",
        "password": "itsnotaphasemom!"
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;

