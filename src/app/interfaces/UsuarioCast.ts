import { Usuario } from "./Usuario";

export interface UsuarioCast extends Usuario{
      "id": "String",
    "nombre": "String",
    "correo": "String",
    "contrasena": "String",
    "listaContactos": []
}