const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({	
	name: {type: String, require: true},
	email: {type: String, require: true},
	celphone: {type: Number, require: true},
	age: {type: Number, require: true}
});

module.exports = mongoose.model('Person', PersonSchema);