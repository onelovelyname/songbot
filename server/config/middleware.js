var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var appController = require('../app/appController.js');

module.exports = function(app, express) {

  app.use(cookieParser('energizer bunny'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());


  app.use(express.static(__dirname + '/../../dist'));

  app.post('/api/status', appController.processStatus);

};
