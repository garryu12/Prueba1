import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiduocService {
  public apiURL = 'http://127.0.0.1:8000/api/alumnos/'
  constructor(public http:HttpClient) { }

  getAlumno(id){
    return this.http.get(`${this.apiURL}${id}`);
  }
  getNombreAlumno(nombre_alumno){
    return this.http.get(`${this.apiURL}${nombre_alumno}}`);
  }
}
