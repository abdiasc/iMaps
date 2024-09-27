import { Component, OnInit } from '@angular/core';
import { LugarService, Lugar } from '../../services/lugar.service';
import { PublicacionService, Publicacion } from '../../services/publicacion.service'; // Importa el servicio desde la nueva carpeta
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { PopoverEliminarComponent } from '../../components/popover-eliminar/popover-eliminar.component'; // Ajusta la ruta según tu estructura


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  publicaciones: Publicacion[] = [];
  nuevaPublicacion: string = '';
  foto: string | null = null;
  lugares: Lugar[] = [];

  constructor(
    private lugarService: LugarService,
    private publicacionService: PublicacionService) 
  {}

  async ngOnInit() {
    this.lugares = await this.lugarService.obtenerLugares();
    this.publicaciones = await this.publicacionService.obtenerPublicaciones();

  }

  async agregarPublicacion() {
    if (this.nuevaPublicacion.trim().length > 0 || this.foto) {
      // Crear el objeto Publicacion
      const nuevaPub: Publicacion = {
        texto: this.nuevaPublicacion,
        foto: this.foto
      };
      await this.publicacionService.agregarPublicacion(nuevaPub);
      this.publicaciones = await this.publicacionService.obtenerPublicaciones();
      this.nuevaPublicacion = ''; // Limpiar el campo de texto después de publicar
      this.foto = null; // Limpiar la foto
    }
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera // Usar cámara para tomar fotos
      });

      this.foto = image.dataUrl || null; // Si `image.dataUrl` es undefined, asigna `null`
    } catch (error) {
      this.foto = null; // Si algo falla, asigna `null`
      console.error('Error al tomar la foto:', error);
    }
  }

  



  async eliminarPublicacion(indice: number) {
    const publicaciones = await this.publicacionService.obtenerPublicaciones();
    publicaciones.splice(indice, 1); // Elimina la publicación en el índice dado
    await this.publicacionService.agregarPublicaciones(publicaciones); // Actualiza el almacenamiento con las publicaciones restantes
    this.publicaciones = await this.publicacionService.obtenerPublicaciones(); // Refresca la lista
  }

}
