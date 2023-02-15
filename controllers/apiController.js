const User = require('../models/User');
const Photo = require('./../models/Photo');
const bcrypt = require('bcryptjs');

const processFile = require('../middleware/upload');
const { format } = require('util');
const { Storage } = require('@google-cloud/storage');
// Instantiate a storage client with credentials
const storage = new Storage({ keyFilename: 'google-cloud-key.json' });
const bucket = storage.bucket('art-gallery-bucket-app');

// Create a User
exports.createUser = async (req, res, next) => {
  const { firstName, lastName, Email, Password } = req.body;
  User.findOne({ Email }).then((user) => {
    if (user) {
      res.send({ message: 'Email already exists' });
    } else {
      const newUser = new User({ firstName, lastName, Email, Password });

      // Hash Password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.Password, salt, (err, hash) => {
          if (err) {
            console.error(err);
          }
          newUser.Password = hash;

          newUser
            .save()
            .then((user) => {
              res.send({ message: 'User Successfully created' });
            })
            .catch((err) => {
              console.error(err);
              res.status(400).send('Error Creating User.');
            });
        })
      );
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
    res.status(404).send('Failed to retieve Users.');
  }
};

// Login a User
exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body;

  User.findOne({ Email: Email }, (err, user) => {
    if (err) {
      console.error(err);
      res.send('An error Occured');
      return;
    }
    if (!user) {
      res.send('User not found');
    }

    console.log(user.Password);
    console.log(Password);

    bcrypt.compare(Password, user.Password, (err, isMatch) => {
      if (err) {
        console.error(err);
      }
      if (isMatch) {
        res.send('Passwords match');
      } else {
        res.send('Passwords do not match');
      }
    });
  });
};

// Upload File
exports.uploadFile = async (req, res) => {
  try {
    await processFile(req, res);

    if (!req.file) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }
    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on('error', (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on('finish', async (data) => {
      // Create URL for directly file access via HTTP.
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );

      res.status(200).send({
        message: 'Uploaded the file successfully: ' + req.file.originalname,
        url: publicUrl,
      });
      // try {
      //   // Make the file public
      //   await bucket.file(req.file.originalname).makePublic();
      // } catch {
      //   return res.status(500).send({
      //     message: `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
      //     url: publicUrl,
      //   });
      // }
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    if (err.code == 'LIMIT_FILE_SIZE') {
      return res.status(500).send({
        message: 'File size cannot be larger than 2MB!',
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

// List files
exports.getFiles = async (req, res) => {
  try {
    const [files] = await bucket.getFiles();
    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file.name,
        url: file.metadata.mediaLink,
      });
    });

    res.status(200).send(fileInfos);
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: 'Unable to read list of files!',
    });
  }
};

// Create a Photo entry
exports.createPhoto = async (req, res) => {
  const { Title, Description, photoUrl } = req.body;

  const newPhoto = new Photo({ Title, Description, photoUrl });

  newPhoto
    .save()
    .then((photo) => {
      res.send({ message: 'Photo Details Successfully Saved' });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send({ message: 'Photo Details Failed to Save' });
    });
};

// Get all photos
exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).send({ photos });
  } catch (err) {
    console.error(err);
    res.status(404).send('Failed to retieve Photo Details.');
  }
};
