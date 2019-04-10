const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({	
	name: {type: String, required: true},
	label: {type: String, required: true}
});

module.exports = mongoose.model('Menu', MenuSchema);