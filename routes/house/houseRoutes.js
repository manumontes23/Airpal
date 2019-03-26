const express = require('express');
const router = express.Router();
const tables =  require('../../database/tables');
const pojoHouse = require('../../POJOS/pjhouse');

router.get("/", (req, res) => {
    tables.House.getAllInstallations((err, rows) => {
        res.json(rows);
        console.log(rows);
    });
});

router.get('/display', (req, res) => {
    tables.House.getHouseDisplay(req, rows => {
        res.json(rows);
    });
});

router.get('/variables', (req, res) => {
    tables.House.getHouseVariables(req.query.houseid, (err, rows) => {
        if(err)throw err;
        console.log(rows);
        res.json(rows);
    });
});

router.get('/RT', (req, res) => {
    console.log(req.query.houseid);
    tables.House.getHouseRT(req.query.houseid, (rows) => {
        console.log(rows);
        res.json(rows[0]);
    });
});

router.get('/rthist', (req, res) => {
    console.log(req.query.houseid);
    tables.House.getHouseRT(req.query.houseid, (rows) => {
        console.log(rows);
        res.json(rows);
    });
});

/**
 * Method @POST
 * To register a house in the DB the @Body request will need:
 * @NAME            (STR)           of the person that requested the installation of the display
 * @LASTNAME        (STR)           of the person that requested the installation of the display
 * @ADDRESS         (STR)           of the house where the house will be installed
 * @TELNUMBER       (STR/NUMERIC)   of the house/person owner of the house/display
 * @PETSNUMBER      (INT)           of pets that live in the house
 * @SMOKERSNUMBER   (INT)           of smokers that live in the house
 * @PAINTTYPE       (STR)           with type of paint of the house
 * @REVOKEHOUSE     (BOOL)          Is this house revoked?
 * @EMAIL           (STR)           of the person that requested the installation
 * @RESIDENTNUMBER  (INT)           Number of people that live in the house
 * @FLOORMATERIAL   (STR)           Material of the house's floor
 * @FLOORNUMBER     (STR)           Number of floors that the house has
 * @WALLSMATERIAL   (STR)           Material of the house's walls (Wood...)
 * @LATITUDE        (DOUBLE)        Latitude at house's location
 * @LONGITUDE       (DOUBLE)        Longitued at house's location
 * @ALTITUDE        (DOUBLE)        Altitude at house's location
 * @INSTALLER       (INT)           @ID of the installer of the display
 * @INSTALLDATE     (DATE)          @DATE of the installation
 */
router.post("/register", (req, res) => {
    let houseInsert = {};

    //Getting request body data with POJO of HOUSE 
    //(Looping POJO and getting data from POJO's corresponding key value in req.body)
    Object.keys(pojoHouse).forEach(key => {
        houseInsert[key] = req.body[key];
    });

    //Setting POJO to insert ID to 0 (This is autonumeric in DB, so it doesn't even matters)
    houseInsert.ID = '0';

    //Getting real value for REVOKEHOUSE value in DB
    houseInsert.REVOKEHOUSE = req.body.REVOKEHOUSE ? "SI" : "NO"
    
    console.log("HOUSE TO INSERT", houseInsert);

    //Inserting data in DB
    tables.House.insert(houseInsert, (err, resHouse)=> {
        //"Handling" error: Throwing it
        if(err) throw err;

        //If installation was successfully, it might return a response (resHouse)
        //If that response exists, we'll insert a data for the installation log
        if(resHouse){
            console.log("HOUSE INSERTED: ", resHouse);
            //Creating empty POJO
            installationInsert = {};

            //Setting values to installation
            installationInsert.HOUSECODE = resHouse.insertId;
            installationInsert.INSTALLER = req.body.INSTALLER;
            //Getting install date from the server and parsing it to DB "Datetype"
            installationInsert.INSTALLDATE = new Date().toISOString().slice(0, 19).replace('T', ' ');
            console.log(installationInsert);
            
            //Inserting value
            tables.Installation.insert(installationInsert, (err, resInst) => {
                //Again, handling
                if (err) throw err;

                //If there wasn't error, it might be a log for the installation inserted
                if(resInst){
                    //Let's get the house inserted, again
                    let houseResponse = houseInsert;
                    houseResponse.DISPLAY = resInst.insertId;
                    houseResponse.INSTALLER = installationInsert.INSTALLER;
                    //Let's send all the data inserted as response
                    console.log("House registered", houseResponse);
                    res.send(houseResponse);
                }
            });
        }
     });
});

module.exports = router;
