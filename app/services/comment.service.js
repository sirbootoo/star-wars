const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;


exports.createComment = async (data) => {
    try {
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