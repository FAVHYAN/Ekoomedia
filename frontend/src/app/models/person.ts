export class Person {


constructor( _id = '', name = '', email = '', celphone = 0, age = 0){
	this._id = _id;
	this.name = name;
	this.email = email;
	this.celphone = celphone;
	this.age = age;
}

	_id: string;
	name: string;
	email: string;
	celphone: number;
	age: number;

}
