import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { MenuComponent } from '../components/menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

	selectedMenu: Menu;	
	menus: Menu[];
	readonly URL_API = 'http://localhost:8000/menu';

  constructor(private http: HttpClient) {
  	this.selectedMenu = new Menu();
  }

  getMenu(){
  	return this.http.get(this.URL_API);
  }

}
