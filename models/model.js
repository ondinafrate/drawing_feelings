var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var feelingSchema = new Schema({
	date: String,
	day: Number,
	//date: {type: String, required: true}, // this version requires this field to exist
	// name: {type: String, unique: true}, // this version requires this field to be unique in the db
	feelingsout: [],
	valuesout: [],
	feelingsin: [],
	valuesin: [],
	//url: String,
	dateAdded : { type: Date, default: Date.now },
})

// export 'Animal' model so we can interact with it in other files
module.exports = mongoose.model('Feeling', feelingSchema);