import { Component, OnInit } from '@angular/core';
import { LugarService, Lugar } from '../../lugar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  lugares: Lugar[] = [];

  constructor(private lugarService: LugarService) { }

  async ngOnInit() {
    this.lugares = await this.lugarService.obtenerLugares();
  }

  
  


}
