import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { ApiduocService } from '../apiduoc.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  nombre_alumnno: any;
  correo_alumno: any;
  constructor(private route: ActivatedRoute,private router:Router, public api:ApiduocService) {
    
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  goToRegistrar(){
    this.router.navigate(['/registrar-asistencia'])
  }
  goToPorcentaje(){
    this.router.navigate(['/porcentaje'])
  }
  goToHorario(){
    this.router.navigate(['/horario'])
  }
  ngOnInit() {
  }

}
