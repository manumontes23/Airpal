const express = require('express');
const router = express.Router();
const houseRouter = require('./houseRoutes');
const adminRouter = require('./adminRoutes');
const queriesRouter = require('./queriesRoutes');
const tables =  require('../database/tables');

/**
 * The response for this request is the render of the file index.html
 * and the server will send a list with the tables that this are in @tables
**/
router.get('/', function(req, res, next) {
    //res.render('index', {navOptions: navOptions, lista: tables});
    //res.redirect("/app");
    res.send("AIRPAL-API")
});


router.use('/admin', adminRouter);

router.use('/queries', queriesRouter);

router.use(tables.House.href, houseRouter);

module.exports = router;
