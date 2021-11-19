import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public nombre:string;
  constructor(private router: Router) {}
 
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
  ngOnInit() {
  }
}
