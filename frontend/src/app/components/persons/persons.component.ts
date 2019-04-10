import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService]
})
export class PersonsComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  	this.getPersons();
  }

  resetForm(form?: NgForm){
  	if(form){
  		form.reset();
  		this.personService.selectedPerson;
  	}
  }

  addPerson(form: NgForm){
  	this.personService.postPerson(form.value)
  		.subscribe(res => {
  		  this.resetForm(form);
        this.getPersons();
  			M.toast({html: 'Se ha registrado satisfactoriamente'});
  		})
  }

  getPersons(){
  	this.personService.getPersons()
  		.subscribe(res => {
  			this.personService.persons = res as Person[];
  			console.log(res);
  		})
  }
}
