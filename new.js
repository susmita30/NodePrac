var express = require('express');
var pg = require('pg');
var db_info = require('./newdb_info.js')
var app = express();
var pool = new pg.Pool(db_info.config);
const util = require('util');

app.get('/checkout/:id/:person/:qty', function(req, res) {



    transaction(req.params.id, req.params.person, -req.params.qty, errResultHandler, res);

    console.log(util.inspect(res, {showHidden: false, depth: null}));

/*
    var func = function(req2, res2) {
     DoThresholdCheck(req.params.id, errResultHandler, res2);

    }
*/
/*
    if(errResultHandler.res === err)
     console.log("ERH error - failure condition for ") 

    console.log('appchck out' + res.rows);
  */  
});




/****************************************************
* /func name  transaction
* /brief      Helper function for checkin route
*
* /author     Luke
****************************************************/
var transaction = function(id, person, qty, retFunc, res) {

    pool.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

         client.query('INSERT INTO transactions(item_id, person, qty_changed) VALUES ($1, $2, $3)', [id, person, qty], function(err, result) {
            //call `done()` to release the client back to the pool

            done();

            if(err) {
                console.error('error running query', err);
                retFunc(err, null, res);
            } else { //put threshold check here, after transaction has been completed
                retFunc(null, 'Transaction Completed Successfully', res);



                 
                

            }
        });
    });
}



var errResultHandler = function(err, result, res) {
    if (err) {
      res.status(500);
      res.jsonp('Database Error');
    } else {
      res.status(200);
      res.jsonp(result);
    }
}


app.listen(3000, function () {
  console.log('Listening on port 3000');
});

