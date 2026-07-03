//it is for schema how the post will look like so we will tell before the schema

  

const mongoose = require("mongoose");

const { post } = require("../app");

  

const postSchema = new mongoose.Schema({

  image: String,

  caption: String,

})

  
  

const postModel = mongoose.model("post",postSchema)

  

module.exports = postModel;