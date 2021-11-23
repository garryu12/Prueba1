import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiduocService } from '../apiduoc.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public correo_alumno: any;
  public nombre:string;
  public password_alumno: any;
  constructor(private router: Router, private http: HttpClient, public api:ApiduocService) {}
 
  goToReceptor(){
    let navigationExtras:NavigationExtras = {
      queryParams:{
        nombre: this.nombre
      }
    }
    this.router.navigate(['/menu'],navigationExtras)
  }
  goToAlumno(){
    this.router.navigate(['/regristrar-alumno'])
  }
  goToRecuperacion(){
    this.router.navigate(['/recuperacion'])
  }

  iniciarSesion(){
    this.api.getAlumno(this.correo_alumno,this.password_alumno).subscribe(success => {
      this.router.navigate(['/menu'])
      console.log(success)
    })
  }



  ngOnInit() {
  }
}
