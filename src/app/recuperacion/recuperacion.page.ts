import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApiduocService } from '../apiduoc.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  public correo_alumno:any;
  public password_alumno:any;
  constructor(private router: Router, public api:ApiduocService) {}
 
  goToHome(){
    this.router.navigate(['/home'])
  }

  recuperarContrasena(){
    var nuevaContrasena = {
      correo_alumno: this.correo_alumno,
      password_alumno: this.password_alumno
    }
    this.correo_alumno = this.correo_alumno;
    this.api.putRecuperarContrasena(this.correo_alumno,nuevaContrasena).subscribe((success)=> {
      console.log(success)
    },error=>(console.log(error)))
  }

  eliminarCuenta(){
    this.api.deleteCuenta(this.correo_alumno).subscribe((success)=>{
      console.log(success)
    },error=>(console.log(error)))
  }

  ngOnInit() {
  }

}
