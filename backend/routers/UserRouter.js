const express = require("express");
const Model = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//initialize
const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  //asynchronous that why we will get promise obj
  new Model(req.body)
  .save()
  //thenc is the shortcut
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// getall
router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//FIXME: : denotes url parameter
router.get("/getbycity/:city", (req, res) => {
  console.log(req.params.city);
  Model.find({ city: req.params.city })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  //new: true is used to display the update data else the data will be updated but not
  //display
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  Model.findOne(req.body)
    .then((result) => {
      if (result) {
        //JWT to generate and verify the token and .env is used
        //payload , secretkey, expiry

        const { _id, email, password } = result;
        const payload = { _id, email, password };
        jwt.sign(
          payload,
          "process.env.JWT_SECRET",
          { expiresIn: "1hr" },
          (err, token) => {
            if (err) {
              console.log(err);
              res.status(500).json(err);
            } else {
              res.status(200).json({ token: token });
            }
          }
        );
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

//npm init -y
//npm i express
//npm i nodemon
//add dev script

//get - read
//post - create
//put - update
//Delete - delete

// router and model for product.

//TODO: Response Status Code
//100-199 are for informational response
//200-299 are for success response
//300-399 are for Redirection Response
//400-499 are for error (specifically client side error)
//500-599 are for server side error
