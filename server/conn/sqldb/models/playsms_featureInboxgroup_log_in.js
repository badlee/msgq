/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playsms_featureInboxgroup_log_in', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    sms_datetime: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    sms_sender: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    keyword: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sms_receiver: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'playsms_featureInboxgroup_log_in'
  });
};
