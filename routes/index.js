let os = require('os');
let express = require('express');
let router = express.Router();

/* GET index page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Load Monitor' });
});

/* GET data */
router.get('/get-data', function(req, res, next) {
    let cpus = os.cpus().length;
    let loadAvg = os.loadavg()[0]/cpus;
    let date = new Date().getTime();
    return res.send({ loadAvg: loadAvg, date: date });
});

module.exports = router;
