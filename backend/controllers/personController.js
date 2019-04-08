const Person = require('../models/person');


const personController = {};



personController.getPersons = async(req, res) => {
	const persons = await Person.find();

	res.json(persons);
		// res.json({
		// 	status : 'personas'
		// })

}	

personController.getPerson = function(){
	
}


personController.createPerson = async(req, res) => {

	const person = new Person(req.body);
	await person.save();
	console.log(person);
	res.json({
		"status" : "saved"
	})
	
}

personController.editPerson = function(){
	
}

personController.deletePerson = function(){
	
}

module.exports = personController;