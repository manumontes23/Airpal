const express = require('express');
const router = express.Router();
const connection  = require('../database/connection');
const tables =  require('../database/tables');

/**
 * Queries relativos a las consultas fundamentales que necesita la aplicación
 * @type {{getVarsByHouseId: (function(*): string)}}
 */
const queries = {
    /**
     * getVarsByHouseId es una función que retorna un String con el query
     * @param id
     * @returns {string}
     */
    getVarsByHouseId : function (id) {
        return 'SELECT * FROM INSTALLATION INNER JOIN VARIABLES ON INSTALLATION.DISPLAY = VARIABLES.DISPLAY WHERE HOUSECODE = ' + id;
    },


    /**
     * getHouseRT is a function that returns a String with a query that will get the RT from a house collected by a display n
     * @param id
     * @returns {string}
     */
    getHouseRT: function(id) {
        let query = 'SELECT tableH.ID, tableH.NAME, tableH.LASTNAME, tableH.ADDRESS, tableH.TELNUMBER, tableI.DISPLAY, tableR.* ' +
            'FROM tableH ' +
            'INNER JOIN tableI ' +
            'ON tableH.ID = tableI.HOUSECODE ' +
            'INNER JOIN tableR ' +
            'ON tableI.DISPLAY = tableR.DISPLAY ' +
            'WHERE tableH.ID = ' + id;
        query = query.replace(/tableH/g, tables.House.name)
            .replace(/tableI/g, tables.Installation.name)
            .replace(/tableR/g, tables.RT.name);

        console.log(query);
        return query;
    },

    /**
     * Returns a query that will return every register of the houses installed with a display
     * @returns {string}
     */
    getAllHousesInstalled: function() {
        let query = "SELECT * FROM tableH INNER JOIN tableI ON tableH.ID = tableI.HOUSECODE";
        query = query.replace(/tableH/g, tables.House.name)
                .replace(/tableI/g, tables.Installation.name);
        return query;
    }
};

router.get('/house-stats', (req, res) => {
    if(connection){
        connection.query(queries.getVarsByHouseId(req.query.idhouse), (err, rows) => {
            if(err) {
                throw err;
            } else {
                res.json(rows);
            }
        })
    }
});


/**
 * Obtiene todas las instalaciones que se han realizado
 */
router.get('/houses-installed', (req, res) => {
    if(connection) {
        connection.query(queries.getAllHousesInstalled(),
            (err, rows) => {
                if(err){
                    throw err;
                } else {
                    res.json(rows);
                }
            });

    }
});

/**
 *
 * @type {Router|router}
 */
router.get('/house-rt', (req, res) => {
    if(connection) {
        connection.query(queries.getHouseRT(req.query.idhouse),
            (err, rows) => {
                if(err){
                    throw err;
                } else {
                    res.json(rows);
                }
            });

    }
});
module.exports = router;