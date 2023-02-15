const User = require("../models/User");

// Create a User
exports.createUser = async (req, res, next) => {
  const { firstName, lastName, Email, Password } = req.body;
  User.findOne({ Email }).then((user) => {
    if (user) {
      res.send({ message: "Email already exists" });
    } else {
      const newUser = new User({ firstName, lastName, Email, Password });
      newUser
        .save()
        .then((user) => {
          res.send({ message: "User Successfully Created!" });
        })
        .catch((err) => {
          console.error(err);
          res.status(400).send("Error Creating User!");
        });
    }
  });
};

// Get all Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      users,
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("Failed to retieve Users.");
  }
};
