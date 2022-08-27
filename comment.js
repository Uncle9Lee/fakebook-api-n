module.exports = (sequelize, DataTypes) => {
  const Comment = Sequelize.define(
      'Comment',
      {
          title: {
              type: DataTypes.STRING},
              allowNull: false,
              validate: {
                  notEmpty: true
              }
          }
      },
      {
          underscored: true
      }
  );
  
  Comment.associate = models => {
      Comment.belongsTo(models.User, {
          foreignkey: {
              name: 'userId',
              allowNull: false
          }
      });
      Comment.belongsTo(models.Post, {
        foreignKey: {
          name: 'postId',
          allowNull: false
        }
      });
  };
  return Comment;
};