import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './components/header/header.component';
import { PersonnageComponent } from './components/personnage/personnage.component';
import { PersonnageListComponent } from './components/personnage-list/personnage-list.component';
import { AddPersonnageComponent } from './components/add-personnage/add-personnage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonnageComponent,
    PersonnageListComponent,
    AddPersonnageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
