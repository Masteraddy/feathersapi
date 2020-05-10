// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    await context.result.map((result) => {
      var soln = result;

      if (soln.type === null) {
        soln.type = { name: 'Invalid', type: 'Invalid' };
      }

      if (soln.from === null) {
        soln.from = { firstname: 'Unknown', lastname: 'Unknown' };
      }
      return soln;
    });
    // console.log(results, context);
    return context;
  };
};
