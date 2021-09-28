import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  nombre: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params)
      if(params && params.nombre){
        this.nombre = params.nombre;
      }else{
        this.nombre = "Alumno"
      }
    })

  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  goToRegistrar(){
    this.router.navigate(['/registrar-asistencia'])
  }
  ngOnInit() {
  }

}
