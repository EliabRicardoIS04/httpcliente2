
export class Usuario {
  _id?: string;
   nombre : String="";
    correo : String ="";
    listaContactos: String[] =[];
    contrasena :  String ="";
    activo: boolean= false;
  Usuario(id: string,nombre : String,correo : String, listaContactos: String[],contrasena :  String ){
    this._id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.listaContactos = listaContactos;
    this.contrasena = contrasena;
    this.activo = true;
  }

  setActivo(activo_:boolean){
    this.activo = activo_;
  }
  getActivo():boolean{
    return this.activo;
  }

  setNombre(nombre_: String){
    this.nombre = nombre_;
  }
  getNombre():String{
    return this.nombre;
  }

}