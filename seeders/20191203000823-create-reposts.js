const { reposts } = require('../sampledata/sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('shares', reposts, {}),
  down: (queryInterface) => queryInterface.bulkDelete('shares', reposts, {}),
};
