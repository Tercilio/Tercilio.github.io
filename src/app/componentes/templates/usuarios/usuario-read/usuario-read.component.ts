import { environment } from './../../../../../environments/environment';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from './../../../../services/usuario.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements AfterViewInit {


  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['id', 'nome', 'salario', 'reajusteAnual', 'contX', 'contY', 'anos', 'action'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  baseUrl: String = environment.baseUrl;

  constructor(
     private service: UsuarioService,
   ) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
     this.usuarios = resposta;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource.paginator = this.paginator;
   })
  }

}

//  this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);