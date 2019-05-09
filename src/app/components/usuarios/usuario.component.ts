import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario:any = {
    nombre: "",
    correo: "",
    pie: ""
  };

  nuevo:boolean = false;
  id:string;

  constructor(private _usuariosService:UsuariosService, private router:Router, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id']
      if(this.id !== 'nuevo'){
        this._usuariosService.getUsuario(this.id).subscribe(data => this.usuario = data)
      }
    });

  }

  ngOnInit() {
  }

  guardar(){
    if(this.id == 'nuevo'){
      this._usuariosService.nuevoUsuario(this.usuario).subscribe(data => {
        this.router.navigate(['/usuario', data.name])
      },
      error => console.error(error));
    }else{
      this._usuariosService.actualizarUsuario(this.usuario, this.id).subscribe(data => {
        
      },
      error => console.error(error));
    }  
  }

  agregarUsuario(forma:NgForm){
    this.router.navigate(['/usuario','nuevo']);
    forma.reset();
  }

}
