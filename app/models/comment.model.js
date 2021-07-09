module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    ipAddress: {
      type: Sequelize.STRING
    },
    movie: {
      type: Sequelize.STRING,
      required: true
    }
  });

  return Comment;
};
