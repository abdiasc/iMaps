import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


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

  async agregarPublicacion(publicacion: string) {
    await this.storageReady;
    const publicaciones = (await this.storage.get('publicaciones')) || [];
    publicaciones.push(publicacion);
    await this.storage.set('publicaciones', publicaciones);
  }

  async obtenerPublicaciones(): Promise<string[]> {
    await this.storageReady;
    return (await this.storage.get('publicaciones')) || [];
  }

}
