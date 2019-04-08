const PersonController = {};


PersonController.getPerson = (req, res) => {
		res.json({
			status : 'Personas'
		});
}
	

PersonController.createPerson = function(){
	
}

module.exports = PersonController;