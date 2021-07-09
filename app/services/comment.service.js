const db = require("../models");
const util = require("../helpers/util");

const Comment = db.comments;
const Op = db.Sequelize.Op;


exports.createComment = async (data) => {
    try {

        data.description = util.limit(data.description, 500); // limit comment to 500 characters
        // Save comment in the database
        const comment = await Comment.create(data);
        return Promise.resolve(comment);
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.fetchComments = async (movie) => {
    try {
        const comments = await Comment.findAll({
            where: { movie },
            order: [
                ['id', 'DESC'],
            ],
        });
        return Promise.resolve(comments);
    } catch (err) {
        return Promise.reject(err)
    }
}