import { Personnage } from './../models/personnage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  filter: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(`${environment.URL}/characters`);
  }

  getById(id: string): Observable<Personnage> {
     return this.http.get<Personnage>(`${environment.URL}/characters/${id}`)
  }

   put(Personnage: Personnage): Observable<Personnage> {
    return this.http.put<Personnage>(`${environment.URL}/characters/${Personnage.id}`,Personnage);
  }

   delete(id:number) {
    return this.http.delete(`${environment.URL}/characters/${id}`);
   }

  create(Personnage: Personnage): Observable<Personnage> {
    return this.http.post<Personnage>(`${environment.URL}/characters`, Personnage);
  }
}
