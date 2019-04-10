import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

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
}
