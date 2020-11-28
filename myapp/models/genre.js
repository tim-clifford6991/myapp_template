var mongoose = require('mongoose');
var { DateTime } = require('luxon');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
  }
);

// Virtual for Genre's URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

GenreSchema
  .virtual('due_back_formatted')
  .get(function () {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
  });
//Export model
module.exports = mongoose.model('Genre', GenreSchema);