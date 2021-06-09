import { UsuarioDTO } from './../../../../models/usuariosDTO.model';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuarios.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-calculate',
  templateUrl: './usuario-calculate.component.html',
  styleUrls: ['./usuario-calculate.component.css']
})
export class UsuarioCalculateComponent implements OnInit {

  id= '';

  usuario: Usuario[] = [];

  userDTO: UsuarioDTO[] = [];

  erro!: any;

  displayedColumns: string[] = ['ano', 'salario', 'contX', 'contY', 'total'];
  dataSource = new MatTableDataSource<UsuarioDTO>(this.userDTO);

  constructor(private service: UsuarioService, private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): any{
    this.service.findById(this.id).subscribe((resposta : any)=>{
      this.userDTO = resposta;
       console.log(resposta); 
    })
  }

  total(id: any): any{
    this.service.findById(this.service.calcular(id).subscribe((resposta : any)=>{
      this.userDTO = resposta;
      console.log(resposta);
    }))
  }


}


