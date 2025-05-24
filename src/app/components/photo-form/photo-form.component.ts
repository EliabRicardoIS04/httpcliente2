import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PhotoService } from '../../services/photo.service';
import { InicioSercionService } from '../../services/servicesUsuario/inicio-sercion.service';
import { Usuario } from '../../interfaces/Usuario';


@Component({
  selector: 'app-photo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css'],

})
export class PhotoFormComponent implements OnInit {

    d : String = "None";
  

  idUser:String |any ;
  usuarioIS:Usuario =new Usuario();
  nombreUsuarioIS:String ="" ;
  file: File | undefined;
  photoSelected: String | ArrayBuffer | null = 'assets/image/no_image.png';

  constructor(private photoService: PhotoService,private iniciar_Secion :InicioSercionService  ) { 
  
  }

  ngOnInit() {
    this.agregarNombreUsuario();
    this.obtenerTodosUsuario();
   }

  

  /*opciones : any= [];*/
 

  obtenerTodosUsuario(){
    

   this.idUser = this.iniciar_Secion.getItemLS("1");
   this.iniciar_Secion.confirmarUsuario(this.idUser)
    .subscribe(res => {this.usuarioIS = res}
     ); 
  }

  agregarNombreUsuario(){
    this.nombreUsuarioIS= this.iniciar_Secion.getItemLS("2") ;
  } 
  





  onPhotoSelected(event: Event): void {
    const evenT = event.target as HTMLInputElement;
    if (evenT.files && evenT.files[0]) {
      this.file = <File>evenT.files[0];
      const reader = new FileReader();

      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  actualizarPagina() {

    window.location.reload();
    console.clear();
    

  }

  uploadPhoto(title: HTMLInputElement, contactos: HTMLInputElement) {
    const arrayU: string = "";
    

    if (this.file) {

      this.photoService.createPhoto(this.file).subscribe({
        next: (response) => {
          if (response === 200) {
            console.log('Éxito:', response);
            window.location.reload();
            return true;
          }

          return true;
          // Continuar con el programa
        },
        error: (error) => {

          console.error('Error al subir la foto:', error);
          let errorMessage = `Ocurrió un error al subir la foto.`;
          if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // Error del lado del servidor
            if (error.status === 404) {
              errorMessage = 'Recurso no encontrado en el servidor.';
            } else if (error.status === 500) {
              errorMessage = 'Error interno del servidor.';
            } else if (error.status >= 400) {
              errorMessage = `Error del servidor: ${error.status} - ${error.error?.message || error.message || 'Error desconocido'}`;
            } else if (error.status === 200) {
              console.warn('El servidor devolvió 200 pero con posible respuesta vacía');
              return true;
            }
          }
          return throwError(() => new Error(errorMessage));
          return false;


          // Manejar el error sin detener el flujo
        }
      });



      console.log("El archivo entro");
    } else {
      
      console.log("No file selected yet.");
    }


    console.log('Title value:', title.value);
  
    console.log('Selected controls:', arrayU);
    console.log('foto: ', this.file);

  }



}
