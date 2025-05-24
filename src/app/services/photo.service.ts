import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, catchError, of } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  URI = 'http://localhost:9090/api/usuario/upload';
  constructor(private http: HttpClient) { }

  createPhoto(photo: File) {
    const fd = new FormData();
    fd.append('file', photo);
    return this.http.post(this.URI,  fd);
      /*.pipe(
      catchError(error => {
          console.error('Error al subir la foto:', error);
          let errorMessage = 'Ocurrió un error al subir la foto.';
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
            }
          }
          return throwError(() => new Error(errorMessage));
        })
    );*/
  }

}



function pipe(arg0: OperatorFunction<unknown, unknown>) {
  throw new Error('Function not implemented.');
}

