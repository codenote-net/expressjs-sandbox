const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
}, {
  timestamps: true
})

mongoose.model('Article', ArticleSchema)
