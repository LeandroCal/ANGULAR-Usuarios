import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosURL:string = "https://admin-62cd4.firebaseio.com/usuarios.json";
  usuarioURL:string = "https://admin-62cd4.firebaseio.com/usuarios/";

  constructor(private http:HttpClient) {

  }

  nuevoUsuario(usuario:any): Observable<any>{
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( this.usuariosURL, body, {headers} ).pipe(map(res => {
      return res;
    }));
  }

  actualizarUsuario(usuario:any, key$:string ): Observable<any>{
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${this.usuarioURL}${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map(res => {
      return res;
    }));
  }

  getUsuario(key$:string): Observable<any>{
    let url = `${this.usuarioURL}${key$}.json`;
    return this.http.get(url).pipe(map(res => {
      return res;
    }));
  }

  getUsuarios(): Observable<any>{
    return this.http.get(this.usuariosURL).pipe(map(res => {
      return res;
    }));
  }

  deleteUsuario(key$:string): Observable<any>{
    let url = `${this.usuarioURL}${key$}.json`;
    return this.http.delete(url).pipe(map(res => {
      return res;
    }));
  }

}
