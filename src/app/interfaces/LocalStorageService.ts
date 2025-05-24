import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(clave: string, valor: any): void {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  getItem(clave: string): any {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : null;
  }

  removeItem(clave: string): void {
    localStorage.removeItem(clave);
  }

  clear(): void {
    localStorage.clear();
  }
}