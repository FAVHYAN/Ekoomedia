const Person = require('../models/person');


const personController = {};



personController.getPersons = async(req, res) => {
	const persons = await Person.find();

	res.json(persons);
		// res.json({
		// 	status : 'personas'
		// })

}	

personController.getPerson = async(req, res) => {
	const persons = await Person.findById(req.params.id);
	res.json(persons);
}


personController.createPerson = async(req, res) => {

	const person = new Person(req.body);
	await person.save();
	console.log(person);
	res.json({
		"status" : "saved"
	})
	
}

personController.editPerson = async(req, res) => {
	const { id } = req.params;
	const person = {
		name : req.body.name,
		email : req.body.email,
		celphone :  req.bodycelphone,
		age : req.body.age
	}
	const persons = await Person.findByIdAndUpdate(id, {$set: person}, {new: true});
	res.json({status:'person update'});
}

personController.deletePerson = async(req, res) => {
	const persons = await Person.findByIdAndRemove(req.params.id);
	res.json({sattus:'Delete person'});
}

module.exports = personController;