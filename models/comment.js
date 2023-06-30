// Commenting code goes here
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { };

Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING(255),
            allowNull: false,
            len: [1],
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'user_id',
            },
        },
        // likes may or may not be used
        comment_likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogs',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Comment;