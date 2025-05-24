import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsuarioCast } from '../../interfaces/UsuarioCast';
import { map, Observable } from 'rxjs';
import { Usuario } from '../../interfaces/Usuario';
@Injectable({
  providedIn: 'root'
})
export class InicioSercionService {
private URI = 'http://localhost:9090/api/usuario';
 
  constructor(private http: HttpClient) { }

  confirmarUsuario(correo :String ){
    
    return this.http.get<Usuario>(this.URI + '/'+correo);
     
  }

  obtenerUsuarios( ){
    
    return this.http.get<Usuario[]>(this.URI);
     
  }


  setItemLS(clave: string, valor: any): void {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  getItemLS(clave: string): any {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : null;
  }

  removeItemLS(clave: string): void {
    localStorage.removeItem(clave);
  }

  clearLS(): void {
    localStorage.clear();
  }

}
