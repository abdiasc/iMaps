import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


export interface Publicacion {
  texto: string;
  foto: string | null; // La foto puede ser null si no se toma ninguna
}
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private storageReady: Promise<void>;

  constructor(private storage: Storage) 
  { 
    this.storageReady = this.init();
  }
  async init() {
    await this.storage.create();
  }

  // Método adaptado para agregar una publicación con texto y foto
  async agregarPublicacion(publicacion: Publicacion) {
    await this.storageReady;
    const publicaciones = (await this.storage.get('publicaciones')) || [];
    publicaciones.push(publicacion);
    await this.storage.set('publicaciones', publicaciones);
  }

  // Método adaptado para obtener todas las publicaciones con texto y foto
  async obtenerPublicaciones(): Promise<Publicacion[]> {
    await this.storageReady;
    return (await this.storage.get('publicaciones')) || [];
  }
  async agregarPublicaciones(publicaciones: any[]) {
    await this.storageReady;
    await this.storage.set('publicaciones', publicaciones);
  }
  
}
