import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Persona } from "../modelo/Persona";

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/ejemplo/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

}
