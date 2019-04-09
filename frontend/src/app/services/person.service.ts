import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

selectedPerson: Person;
readonly URL_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPersons(){
  	return this.http.get(this.URL_API);
  }

  postPerson(Person: Person){
  	return this.http.post(this.URL_API, Person);
  }

  putPerson(person: Person){
  	return this.http.put(this.URL_API+'/${person._id}', person);
  }

  deletePerson(id:string){
  	return this.http.delete(this.URL_API + '${_id');
  }
}
