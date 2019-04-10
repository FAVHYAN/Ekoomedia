const Menu = require('../models/menu');


const menuController = {};



menuController.getMenu = async(req, res) => {
	const menu = await Menu.find();

	res.json(menu);
		res.json({
			status : 'menu'
		})

}	

menuController.editMenu = async(req, res) => {
	const { id } = req.params;
	const menu = {
		name : req.body.name,
		label : req.body.label,
	}
	const menus = await Menu.findByIdAndUpdate(id, {$set: menu}, {new: true});
	res.json({status:'menu update'});
}


menuController.createMenu = async(req, res) => {

	const menu = new Menu(req.body);
	await menu.save();
	console.log(menu);
	res.json({
		"status" : "saved"
	})
	
}

module.exports = menuController;