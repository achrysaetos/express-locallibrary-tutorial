
//DEFINING SCHEMAS -- example below
var mongoose = require('mongoose');//require mongoose

var Schema = mongoose.Schema;//define a schema

//a schema can have an arbitrary number of fields, each one representing a field in the documents stored in MongoDB
var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min:3, max:100}
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);//compile model from schema

//Once we have created a schema, we can use it to create models. The model represents a collection of documents in the database
//that we can search, while the instances of the model represent individual documents that we can save and retrieve.
//For example, we can create and modify documents, search for records, etc. 
//See examples at https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose.