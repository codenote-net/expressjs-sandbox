const express = require('express')
const router = express.Router()
const unicodeSubstring = require('unicode-substring')

router.get('/', (req, res, next) => {
  res.render('unicode/index')
})

router.post('/substring', (req, res, next) => {
  res.json({
    body: req.body,
    formatted: {
      substring: req.body.substring.substring(req.body.start, req.body.end),
      unicodeSubstring: unicodeSubstring(req.body.unicodeSubstring, req.body.start, req.body.end)
    }
  })
})

module.exports = router
