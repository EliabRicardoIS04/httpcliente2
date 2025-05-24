import { Component, inject } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { InicioSercionService } from '../../services/servicesUsuario/inicio-sercion.service';
import { UsuarioCast } from '../../interfaces/UsuarioCast';
import { RouterModule, Routes } from '@angular/router';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-inicio-secion',
  standalone: false,
  templateUrl: './inicio-secion.component.html',
  styleUrl: './inicio-secion.component.css'
})
export class InicioSecionComponent {



  constructor(private iniciar_Secion: InicioSercionService) { }

  ngOnInit() {
  }

  iniciarSecion(correo: HTMLInputElement) {

console.log('correo', correo.value);

    this.iniciar_Secion.confirmarUsuario(correo.value)
      .subscribe(respuesta => {
        this.iniciar_Secion.setItemLS("1", respuesta.correo),
          this.iniciar_Secion.setItemLS("2", respuesta.nombre),
          console.log("usauario", respuesta);
      });

    






    console.log('correo', correo.value);


  }


}
