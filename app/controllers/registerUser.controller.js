const db = require("../models");
const UserInfo = db.UserModel;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Create and Save a new Tutorial
exports.createUser = (req, res) => {
  // Validate request
  console.log('------', req.body)
  if (!req.body.Name || !req.body.Password ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
//  console.log(req.body.Password)
 let hashPassword = bcrypt.hashSync(req.body.Password, 10);
//  console.log("hash",hash);
  // Create a Tutorial
  const UserDetails = new UserInfo({
    Name: req.body.Name,
    Password: hashPassword,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    DateOfBirth: req.body.DateOfBirth,
    Weight: req.body.Weight,
    Height: req.body.Height,
  });

  // console.log(UserDetails.Password)
  // Save Tutorial in the database
  UserDetails
    .save(UserDetails)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//   console.log(req.body)
  // const title = req.query.title;
  // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  // Tutorial.find(condition)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
// };

// Find a single Tutorial with an id
exports.findOneUser = (req, res) => {
  const Name = req.body.Name;
  console.log("req.body",req.body);
  console.log('Name', Name)

  UserInfo.find({Name: Name})
    .then(data => {
      // console.log(data[0]._id)
      if (!data)
        res.status(404).send({ message: "Not found User with Name " + Name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with Name=" + Name });
    });
};

// Update a Tutorial by the id in the request
exports.updateUserInfo = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  UserInfo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// exports.anxietyTestScore = (req, res) => {
//   console.log(req.body)
// };