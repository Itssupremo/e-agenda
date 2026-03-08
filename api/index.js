const app = require('../backend/server');
const { connectDB } = require('../backend/server');

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
