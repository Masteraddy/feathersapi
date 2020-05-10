// requestout-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'requestout';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: false,
    },
    property: {
      type: String,
      required: true,
    },
    propertyId: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: 'pending',
    },
    timestart: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: Number,
      default: 0,
    },
    assigned: {
      type: String,
      default: 'Unassigned',
    },
    assignedId: {
      type: String,
      default: 'Unassigned',
    },
    priority: {
      type: String,
      default: 'Unassigned',
    },
    timecompleted: {
      type: Date,
    },
    timescheduled: {
      type: Date,
    },
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
