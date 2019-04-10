import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
 title: string;
  constructor(private menuService: MenuService) { 

  	this.title = "Airbus";

  }

  ngOnInit() {
  	this.getMenu();
  }

  getMenu(){
  	this.menuService.getMenu()
  		.subscribe(res => {
  			this.menuService.menus = res as Menu[];
  			console.log(res);
  		})
  }

  onName(menu){
  	this.title = menu;
		console.log(menu);
  }
}
