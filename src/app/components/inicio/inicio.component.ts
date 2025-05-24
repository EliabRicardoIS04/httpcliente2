import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { InicioSercionService } from '../../services/servicesUsuario/inicio-sercion.service';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  d : String = "None";
  

  idUser:String |any ;
  usuarioIS:Usuario =new Usuario();
  nombreUsuarioIS:String ="" ;
constructor(private iniciar_Secion :InicioSercionService){}

 ngOnInit() {
    this.agregarNombreUsuario()
    
   }
agregarNombreUsuario(){
    this.nombreUsuarioIS= this.iniciar_Secion.getItemLS("2") ;
  } 


  selectedCard(){
 

  }


}
