import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage implements OnInit {

  constructor(private animationCtrl: AnimationController) {
   
   }
   ngAfterViewInit()
   {
    //const animation = this.animationCtrl.create()
    //.addElement(document.querySelector(".text"))
    //.duration(1500)
    //.iterations(Infinity)
    //.fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    //.fromTo('opacity', '1', '0.2');

    const animation = this.animationCtrl.create()
  .addElement(document.querySelector(".text"))
  .duration(1500)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ])
    
    
    animation.play();
   }
   

  ngOnInit() {
  }

}
