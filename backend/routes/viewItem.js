var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const shop = req.body.shop;

    var sql = 'select * from item_table where shop = ?';
    con.query(sql,[`${shop}`],function (err, result) {
        if (err) 
        {
            console.log("items not recieved");
            res.end("items not recieved");
            throw err;
        }
        else if(result.length == 0)
        {
            console.log("No Items");
            res.status(204);
            res.end("No Items");
        }
        else {
            console.log("Items Received");
            res.status(200);
            res.send({result});
        }
    });
    });

module.exports = router


