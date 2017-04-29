var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// our db model
var Feeling = require("../models/model.js");

// simple route to render am HTML form that can POST data to our server
// NOTE that this is not a standard API route, and is really for testing
router.get('/create-feelings', function(req,res){
  res.render('feeling-form.html')
})

// simple route to render an HTML page that pulls data from our server and displays it on a page
// NOTE that this is not a standard API route, and is really for testing
router.get('/show-feelings', function(req,res){
  res.render('show-feelings.html')
})

router.get('/', function(req,res){
  res.render('timeline.html')
})

// simple route to show an HTML page
router.get('/home', function(req,res){
  res.render('home.html')
})

router.get('/sketches', function(req,res){
  res.render('sketches.html')
})

router.get('/about', function(req, res){
  res.render('about.html')
})

router.get('/feelings', function(req, res){
  res.render('feelings.html')
})

router.get('/edit/:id', function(req,res){

  var requestedId = req.params.id;

  Feeling.findById(requestedId, function(err, data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      return res.json(err)
    }

    var viewData = {
      status: "OK",
      feeling: data
    }

    return res.render('edit.html', viewData);
  })

})

// /**
//  * POST '/api/create'
//  * Receives a POST request of the new animal, saves to db, responds back
//  * @param  {Object} req. An object containing the different attributes of the Animal
//  * @return {Object} JSON
//  */

router.post('/api/create', function(req, res){

    console.log(req.body);

    // pull out the information from the req.body
    var date = req.body.date;
    var day = req.body.day;
    var feelingsout = req.body.feelingsout.split(",");
    var feelingsin = req.body.feelingsin.split(",");
    var valuesout = req.body.valuesout.split(",");
    var valuesin = req.body.valuesin.split(",");  // split string into array
    // var weight = req.body.weight;
    // var color = req.body.color;
    // var url = req.body.url;

    // hold all this data in an object
    // this object should be structured the same way as your db model
    var feelingObj = {
      date: date,
      day: day,
      feelingsout: feelingsout,
      valuesout: valuesout,
      feelingsin: feelingsin,
      valuesin: valuesin,
    };

    // create a new animal model instance, passing in the object
    var feeling = new Feeling(feelingObj);

    // now, save that animal instance to the database
    // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model-save
    feeling.save(function(err,data){
      // if err saving, respond back with error
      if (err){
        var error = {status:'ERROR', message: 'Error saving feeling'};
        return res.json(error);
      }

      console.log('saved a new feeling!');
      console.log(data);

      // now return the json data of the new animal
      var jsonData = {
        status: 'OK',
        feeling: data
      }

      return res.json(jsonData);

    })
});

// /**
//  * GET '/api/get/:id'
//  * Receives a GET request specifying the animal to get
//  * @param  {String} req.params.id - The animalId
//  * @return {Object} JSON
//  */

router.get('/api/get/:id', function(req, res){

  var requestedId = req.params.id;

  // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model.findById
  Feeling.findById(requestedId, function(err,data){

    // if err or no user found, respond with error
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find that feeling'};
       return res.json(error);
    }

    // otherwise respond with JSON data of the animal
    var jsonData = {
      status: 'OK',
      feeling: data
    }

    return res.json(jsonData);

  })
})

// /**
//  * GET '/api/get'
//  * Receives a GET request to get all animal details
//  * @return {Object} JSON
//  */

router.get('/api/get', function(req, res){

  // mongoose method to find all, see http://mongoosejs.com/docs/api.html#model_Model.find
  Feeling.find(function(err, data){
    // if err or no animals found, respond with error
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find feelings'};
      return res.json(error);
    }

    // otherwise, respond with the data

    var jsonData = {
      status: 'OK',
      feelings: data
    }

    res.json(jsonData);

  })

})

// /**
//  * GET '/api/search'
//  * Receives a GET request to search an animal
//  * @return {Object} JSON
//  */
router.get('/api/search', function(req,res){

  // first use req.query to pull out the search query
  var searchTerm = req.query.name;
  console.log("we are searching for " + searchTerm);

  // let's find that animal
  Feeling.find({name: searchTerm}, function(err,data){
    // if err, respond with error
    if(err){
      var error = {status:'ERROR', message: 'Something went wrong'};
      return res.json(error);
    }

    //if no animals, respond with no animals message
    if(data==null || data.length==0){
      var message = {status:'NO RESULTS', message: 'We couldn\'t find any results'};
      return res.json(message);
    }

    // otherwise, respond with the data

    var jsonData = {
      status: 'OK',
      feelings: data
    }

    res.json(jsonData);
  })

})

// /**
//  * POST '/api/update/:id'
//  * Receives a POST request with data of the animal to update, updates db, responds back
//  * @param  {String} req.params.id - The animalId to update
//  * @param  {Object} req. An object containing the different attributes of the Animal
//  * @return {Object} JSON
//  */

router.post('/api/update/:id', function(req, res){

   var requestedId = req.params.id;

   var dataToUpdate = {}; // a blank object of data to update

    // pull out the information from the req.body and add it to the object to update
    var date, day, feelingsout, valuesout, feelingsin, valuesin;

    // we only want to update any field if it actually is contained within the req.body
    // otherwise, leave it alone.
    if(req.body.date) {
      date = req.body.date;
      // add to object that holds updated data
      dataToUpdate['date'] = date;
    }
    if(req.body.day) {
      day = req.body.day;
      // add to object that holds updated data
      dataToUpdate['day'] = day;
    }
    if(req.body.feelingsout) {
      feelingsout = req.body.feelingsout.split(',');
      // add to object that holds updated data
      dataToUpdate['feelingsout'] = feelingsout;
    }
    if(req.body.valuesout) {
      valuesout = req.body.valuesout.split(',');
      // add to object that holds updated data
      dataToUpdate['valuesout'] = valuesout;
    }
    if(req.body.feelingsin) {
      feelingsin = req.body.feelingsin.split(',');
      // add to object that holds updated data
      dataToUpdate['feelingsin'] = feelingsin;
    }
    if(req.body.valuesin) {
      valuesin = req.body.valuesin.split(',');
      // add to object that holds updated data
      dataToUpdate['valuesin'] = valuesin;
    }

    // var feelingsout = []; // blank array to hold tags
    // if(req.body.feelingsout){
    //   feelingsout = req.body.feelingsout.split(","); // split string into array
    //   // add to object that holds updated data
    //   dataToUpdate['feelingsout'] = feelingsout;
    // }

    // var valuesout = []; // blank array to hold tags
    // if(req.body.valuesout){
    //   valuesout = req.body.valuesout.split(","); // split string into array
    //   // add to object that holds updated data
    //   dataToUpdate['valuesout'] = valuesout;
    // }

    // var feelingsin = []; // blank array to hold tags
    // if(req.body.feelingsin){
    //   feelingsin = req.body.feelingsin.split(","); // split string into array
    //   // add to object that holds updated data
    //   dataToUpdate['feelingsin'] = feelingsin;
    // }

    // var valuesin = []; // blank array to hold tags
    // if(req.body.valuesin){
    //   valuesin = req.body.valuesin.split(","); // split string into array
    //   // add to object that holds updated data
    //   dataToUpdate['valuesin'] = valuesin;
    // }


    console.log('the data to update is ' + JSON.stringify(dataToUpdate));

    // now, update that animal
    // mongoose method findByIdAndUpdate, see http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
    Feeling.findByIdAndUpdate(requestedId, dataToUpdate, function(err,data){
      // if err saving, respond back with error
      if (err){
        var error = {status:'ERROR', message: 'Error updating feeling'};
        return res.json(error);
      }

      console.log('updated the feeling!');
      console.log(data);

      // now return the json data of the new person
      var jsonData = {
        status: 'OK',
        feeling: data
      }

      return res.json(jsonData);

    })

})

/**
 * GET '/api/delete/:id'
 * Receives a GET request specifying the animal to delete
 * @param  {String} req.params.id - The animalId
 * @return {Object} JSON
 */

router.get('/api/delete/:id', function(req, res){

  var requestedId = req.params.id;

  // Mongoose method to remove, http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  Feeling.findByIdAndRemove(requestedId,function(err, data){
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find that feeling to delete'};
      return res.json(error);
    }

    // otherwise, respond back with success
    var jsonData = {
      status: 'OK',
      message: 'Successfully deleted id ' + requestedId
    }

    res.json(jsonData);

  })

})

module.exports = router;
