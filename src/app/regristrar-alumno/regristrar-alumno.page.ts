import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApiduocService } from '../apiduoc.service';
@Component({
  selector: 'app-regristrar-alumno',
  templateUrl: './regristrar-alumno.page.html',
  styleUrls: ['./regristrar-alumno.page.scss'],
})
export class RegristrarAlumnoPage implements OnInit {

  public nombre_alumnno:any;
  public correo_alumno:any;
  public password_alumno:any;


  constructor(private router: Router, public api:ApiduocService) {}
 
  goToHome(){
    this.router.navigate(['/home'])
  }

  nuevoAlumno(){
    var post = {
    
      nombre_alumnno:this.nombre_alumnno,
      correo_alumno: this.correo_alumno,
      password_alumno: this.password_alumno
    
    }
    this.api.postNuevoAlumno(post).subscribe((success)=> {
      console.log(success)
    },error=>(console.log(error)))
  }

  ngOnInit() {
  }
  

}
