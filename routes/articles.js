const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Article = mongoose.model('Article')

router.get('/', async (req, res) => {
  const articles = await Article.find()
  res.render('articles/index', { articles })
})

router.post('/', async (req, res) => {
  await Article.create({
    title: req.body.title,
    body: req.body.body
  })
  res.redirect('/articles')
})

module.exports = router
