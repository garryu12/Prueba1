import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  public nombre:string;
  constructor(private router: Router) {}
 
  goToHome(){
    this.router.navigate(['/home'])
  }
  ngOnInit() {
  }

}
