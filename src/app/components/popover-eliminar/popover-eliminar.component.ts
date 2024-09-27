
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover-eliminar',
  templateUrl: './popover-eliminar.component.html',
  styleUrls: ['./popover-eliminar.component.scss'],
  template: `
    <ion-list>
      <ion-item button (click)="eliminar()">
        <ion-icon name="trash" slot="start"></ion-icon>
        Eliminar
      </ion-item>
    </ion-list>
  `
})
export class PopoverEliminarComponent  implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    let iso = 0;
  }

  eliminar() {
    this.popoverController.dismiss(true); // Devuelve true si se debe eliminar
  }

}
