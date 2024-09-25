import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugarService, Lugar } from '../../lugar.service';

@Component({
  selector: 'app-agregar-lugar',
  templateUrl: './agregar-lugar.page.html',
  styleUrls: ['./agregar-lugar.page.scss'],
})
export class AgregarLugarPage implements OnInit {

  nuevoLugar: Lugar = { id: Date.now(), nombre: '', descripcion: '', imagen: '' };
  constructor(private lugarService: LugarService, private router: Router) { }

  ngOnInit() {
  }
  async agregarLugar() {
    await this.lugarService.agregarLugar(this.nuevoLugar);
    console.log('Lugar agregado:', this.nuevoLugar);
    this.router.navigate(['/home']);
  }

}
