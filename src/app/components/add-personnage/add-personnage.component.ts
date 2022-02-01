import { PersonnageService } from './../../services/personnage.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-personnage',
  templateUrl: './add-personnage.component.html',
  styleUrls: ['./add-personnage.component.scss']
})

export class AddPersonnageComponent implements OnInit {

  formulaire: FormGroup;


  constructor(private personnageService: PersonnageService) {
    this.formulaire=new FormGroup({
      name:new FormControl(),
      title: new FormControl()
    })
   }

  ngOnInit(): void {
 
  }

  save(){
    this.personnageService.create(this.formulaire.value).subscribe({
      next:()=>null,
      error:err =>console.error(err),
      complete:()=>console.log('perso ajouté')
    
    })
    console.log(this.formulaire.value)
  }
}
