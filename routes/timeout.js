const express = require('express')
const router = express.Router()

// Timeout in milliseconds. Default: 120000 (2 minutes).
// https://nodejs.org/docs/latest-v12.x/api/http.html#http_server_timeout
router.get('/default', function (req, res, next) {
  let elapsedTime = 0 // 経過時間
  const delay = 1000 // ms

  setInterval(() => {
    elapsedTime += delay
    console.log(`${elapsedTime} ms`)
  }, delay)

  // no response
})

// https://nodejs.org/docs/latest-v12.x/api/http.html#http_request_settimeout_timeout_callback
router.get('/req_setTimeout', function (req, res, next) {
  const reqTimeout = 1000 // ms
  req.setTimeout(reqTimeout)

  let elapsedTime = 0 // 経過時間
  const delay = 100 // ms

  setInterval(() => {
    elapsedTime += delay
    if (elapsedTime > reqTimeout) {
      return
    }
    console.log(`${elapsedTime} ms`)
  }, delay)

  // no response
})

// https://nodejs.org/docs/latest-v12.x/api/http.html#http_response_settimeout_msecs_callback
router.get('/res_setTimeout', function (req, res, next) {
  const resTimeout = 2000 // ms
  res.setTimeout(resTimeout)

  let elapsedTime = 0 // 経過時間
  const delay = 100 // ms

  setInterval(() => {
    elapsedTime += delay
    if (elapsedTime > resTimeout) {
      return
    }
    console.log(`${elapsedTime} ms`)
  }, delay)

  // no response
})

module.exports = router
