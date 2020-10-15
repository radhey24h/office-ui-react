var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..'),
  port = process.env.PORT || 3000,
  ip = process.env.IP,
  DB_HOST = process.env.DATABASE_HOST || 'localhost',
  DB_USERNAME = process.env.DATABASE_USERNAME || 'root',
  DB_PASSWORD = process.env.DATABASE_PASSWORD || 'welcome',
  DB_NAME = 'mysite_office';

var config = {
  root: rootPath,
  app: {
    name: 'MySite'
  },
  port: port,
  ip: ip,
  //db: 'mysql://root:lunasushi@rds.c6dzhur9cerb.us-east-1.rds.amazonaws.com/mercury',
  db:'mysql://'+ DB_USERNAME +':'+ DB_PASSWORD +'@'+ DB_HOST +'/'+DB_NAME,
  sequelize: {
    logger: false
  },
  // jwtSecret: 'xjkds5jfiew23905as7/3uk',
  // emailFrom: '"PricePoint Admin" <admin@griprocure.com>',
  // emailTo: 'ryankeintz@griprocure.com,daveey@gmail.com,nealsiebert@gmail.com',
  // emailToCorporateUI: "admin@griprocure.com"

};

module.exports = config;
