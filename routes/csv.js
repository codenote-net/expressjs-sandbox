const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

/* GET index page. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/upload', upload.single('csv'), (req, res, next) => {
  res.send('Uploaded a CSV file');
});

module.exports = router;
