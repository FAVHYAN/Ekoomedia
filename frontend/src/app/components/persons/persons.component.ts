import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';

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
  addPerson(form: NgForm){
  	this.personService.postPerson(form.value)
  		.subscribe(res=>{
  			console.log(res);
  		})

  }
  resetForm(form?: NgForm ){
  	if(form){
  		form.reset();
  		this.personService.selectedPerson = 0;
  	}
  }
}
