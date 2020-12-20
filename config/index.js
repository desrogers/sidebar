const dotenv = require('dotenv');
const aws = require('./aws.js');

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️ Couldn't find .env file  ⚠️");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  aws,
};
