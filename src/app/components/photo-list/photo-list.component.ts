import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { InicioSercionService } from '../../services/servicesUsuario/inicio-sercion.service';
import { Usuario } from '../../interfaces/Usuario';
@Component({
  selector: 'app-photo-list',
  standalone: false,
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent {

   d : String = "None";
    
  
    idUser:String |any ;
    usuarioIS:Usuario =new Usuario();
    nombreUsuarioIS:String |any ;

  constructor(private router: Router,private iniciar_Secion :InicioSercionService ){}
 ngOnInit() {
    this.agregarNombreUsuario()
    
   }

  selectedCard(){
    this.router.navigate(['/photos', 1])

  }

agregarNombreUsuario(){
    this.nombreUsuarioIS= this.iniciar_Secion.getItemLS("2") ;
  } 
  

}
