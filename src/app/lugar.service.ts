import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Lugar {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class LugarService {
  private lugares: Lugar[] = [];
  private storageInitialized = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageInitialized = true;
    this.lugares = (await this.storage.get('lugares')) || [];
  }

  async agregarLugar(lugar: Lugar) {
    this.lugares.push(lugar);
    await this.storage.set('lugares', this.lugares);
  }

  async obtenerLugares(): Promise<Lugar[]> {
    if (!this.storageInitialized) {
      await this.init();
    }
    return this.lugares;
  }
}
