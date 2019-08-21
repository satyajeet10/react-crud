const express = require('express');
const businessRoutes = express.Router();

let Business = require('./business.modal');

businessRoutes.route('/add').post((req,res)=>{
    let business = new Business(req.body);
    console.log("\r\n\r\n");
    console.log(req.body.person_image);
    const buffer = Buffer.from(base64string, 'base64');
    business.person_image=buffer;
    business.save().then(business=>{
        res.status(200).json({'business':'business is added successfully'});
    })
    .catch(err=>{
        res.status(400).send("Unable to save data", err);
    })
})

businessRoutes.route("/").get((req,res)=>{
    Business.find((err,data)=>{
        if (err){
            console.log(err);
        }else {
            res.json(data);
        }
    })
})

businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes