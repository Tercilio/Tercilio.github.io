import { environment } from './../../environments/environment';
import { Usuario } from 'src/app/models/usuarios.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Usuario[]> {
    const url = this.baseUrl + "/usuarios";
    return this.http.get<Usuario[]>(url);
  }

  findById(id: any): Observable<Usuario> {
    const url = this.baseUrl + "/usuarios/" + id;
    return this.http.get<Usuario>(url);
  }

  create(usuario: Usuario): Observable<Usuario> {
    const url = this.baseUrl + '/usuarios';
    let total = this.calcular(usuario);
    console.log(total);
    return this.http.post<Usuario>(url, usuario);
  }

  calcular(usuario: Usuario) : any{
    this.findById(usuario.id);
    const url = `${this.baseUrl}/usuarios/${usuario.id}`;
    return this.http.get<Usuario>(url); 
  }

  message(msg: any): void {
    this.snack.open(`${msg}`, "OK", {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 1000,
    });
  }


}
