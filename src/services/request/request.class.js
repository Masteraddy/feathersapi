const { Service } = require('feathers-mongoose');

exports.Request = class Request extends Service {
  // constructor(options, app) {
  //   super(options);
  //   app.get('mongoClient').then((db) => {
  //     this.Model = db.collection('request');
  //   });
  // }
  // create(data, params) {
  //   var { name, type, from, description, picture, property, propertyId } = data;
  //   if (name && type && from && description && property && propertyId) {
  //     let newData = {
  //       name,
  //       type,
  //       from,
  //       description,
  //       picture,
  //       property,
  //       propertyId,
  //     };
  //     console.log(newData);
  //     return super.create(newData, params);
  //   } else {
  //     throw new Error('Please enter all required field!');
  //   }
  // }
};
