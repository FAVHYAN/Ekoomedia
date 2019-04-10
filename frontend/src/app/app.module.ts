import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { MenuComponent } from './components/menu/menu.component';
import { RangoEdad } from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    MenuComponent,
    RangoEdad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
