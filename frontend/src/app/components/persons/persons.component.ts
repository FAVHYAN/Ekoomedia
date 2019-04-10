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
  		})

  }

}
