import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService, Lugar } from '../../services/lugar.service';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.page.html',
  styleUrls: ['./lugar-detail.page.scss'],
})
export class LugarDetailPage implements OnInit {
  lugar: Lugar | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private lugarService: LugarService
  ){}

  async ngOnInit() {
    const lugarId = Number(this.route.snapshot.paramMap.get('id'));
    const lugares = await this.lugarService.obtenerLugares();
    this.lugar = lugares.find((l) => l.id === lugarId) || null;
  }
  

}
