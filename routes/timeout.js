var express = require('express');
var router = express.Router();

// Timeout in milliseconds. Default: 120000 (2 minutes).
// https://nodejs.org/docs/latest-v12.x/api/http.html#http_server_timeout
router.get('/default', function(req, res, next) {
  let elapsedTime = 0; // 経過時間
  const delay = 1000; // ms

  setInterval(() => {
    elapsedTime += delay;
    console.log(`${elapsedTime} ms`);
  }, delay);

  // no response
});

module.exports = router;
