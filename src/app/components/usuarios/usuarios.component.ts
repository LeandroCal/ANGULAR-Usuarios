import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios:any;
  loading:boolean = true;

  constructor(private _usuariosService:UsuariosService) {
    this._usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  eliminarUsuario(key$:string){
    this._usuariosService.deleteUsuario(key$).subscribe(respuesta => {
      if(respuesta){
        console.error(respuesta);
      }else{
        delete this.usuarios[key$];
      }
    });
  }

}
