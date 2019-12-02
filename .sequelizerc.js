var path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'migrations-path': path.resolve('db', 'migrations'),
  'seeders-path': path.resolve('db', 'seeders'),
  'model-path': path.resolve('db', 'models')
}