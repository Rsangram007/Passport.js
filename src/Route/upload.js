const express = require('express');
const app = express.Router();
const multer = require('multer');
const passport = require('passport');
const File = require('../Model/file');

const upload = multer({
    limits: {
      fileSize: 1024 * 1024 * 10, // 10 MB limit
    },
  });
  
  app.post(
    '/upload',
    passport.authenticate('jwt', { session: false }),
    upload.single('file'),
    async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
        }
  
        const file = {
          filename: req.file.originalname,
          contentType: req.file.mimetype,
          size: req.file.size,
          data: req.file.buffer,
          uploadedBy: req.user._id,
        };
  
        await File.create(file);
  
        return res.status(201).json({ message: 'File uploaded successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  );  


  module.exports = app;