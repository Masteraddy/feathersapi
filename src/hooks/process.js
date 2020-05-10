// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    let query = { ...context.params.query, $populate: 'from type' };
    context.params.query = query;
    // console.log(context);
    return context;
  };
};
