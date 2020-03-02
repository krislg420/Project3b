// Creating our Wuphf (comments) model
module.exports = function (sequelize, DataTypes) {
    var Wuphf = sequelize.define("Wuphf", {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // video number will be the link for 'wuphfs' to inner join to 'videos'
        video_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Wuphf;
};

// comments belong to a user and a user has many comments
// video has many comments'

// on video
// api request get all the comments and include all the users

// post author blog example, little different because we have multiple relations on the comment fields,  still only have one asscoaite method but it only 