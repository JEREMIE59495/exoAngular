import { PersonnageService } from './../../services/personnage.service';
import { Component, OnInit } from '@angular/core';
import { Personnage } from 'src/app/models/personnage';

@Component({
  selector: 'app-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.scss']
})
export class PersonnageListComponent implements OnInit {
  personnageList: Personnage[] = []
  value:string="";
  variable: string = "";
  constructor(private personnageService : PersonnageService) { }

  ngOnInit(): void {
    console.log("creation");
    this.getAll();
    
  }

  private getAll(){
    this.personnageService.getAll().subscribe({
      next:data=>this.personnageList = data,
      error:err => console.error(err),
      complete:()=>console.log("Persnnage is here")
  
    })
  }

  delete(id:number){
    this.personnageService.delete(id).subscribe(()=>this.getAll())
  }

}
