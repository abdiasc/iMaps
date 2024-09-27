import { Component, OnInit } from '@angular/core';
import { LugarService, Lugar } from '../../services/lugar.service';
import { PublicacionService } from '../../services/publicacion.service'; // Importa el servicio desde la nueva carpeta

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  publicaciones: string[] = [];
  nuevaPublicacion: string = '';
  lugares: Lugar[] = [];

  constructor(private lugarService: LugarService,private publicacionService: PublicacionService) { }

  async ngOnInit() {
    this.lugares = await this.lugarService.obtenerLugares();
    this.publicaciones = await this.publicacionService.obtenerPublicaciones();

  }
  async agregarPublicacion() {
    if (this.nuevaPublicacion.trim().length > 0) {
      await this.publicacionService.agregarPublicacion(this.nuevaPublicacion);
      this.publicaciones = await this.publicacionService.obtenerPublicaciones();
      this.nuevaPublicacion = ''; // Limpiar el campo de texto después de publicar
    }
  }

}
