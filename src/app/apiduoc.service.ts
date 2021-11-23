import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiduocService {
  public apiURL = 'http://127.0.0.1:8000/api/alumnos/'
  public apiPut = 'http://127.0.0.1:8000/api/putAlumno/'
  public apiDel = 'http://127.0.0.1:8000/api/deleteAlumno/'
  public apiLog = 'http://127.0.0.1:8000/api/loginUsuario/'
  constructor(public http:HttpClient) { }

  getAlumno(correo_alumno,password_alumno){
    return this.http.get(`${this.apiLog}${correo_alumno}/${password_alumno}`);
  }
  getNombreAlumno(nombre_alumnno){
    return this.http.get(`${this.apiURL}${nombre_alumnno}}`);
  }
  getCorreoAlumno(correo_alumno){
    return this.http.get(`${this.apiURL}${correo_alumno}}`);
  }

  postNuevoAlumno(post){
    return this.http.post(`${this.apiURL}`,post);
  }

  putRecuperarContrasena(correo_alumno,post){
    return this.http.put(`${this.apiPut}${correo_alumno}`,post)
  }

  deleteCuenta(correo_alumno){
    return this.http.delete(`${this.apiDel}${correo_alumno}`)
  }


}
