import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent  implements OnInit {

  id= '';

  usuario: Usuario = {
    id: '',
    nome: '',
    salario: '',
    reajusteAnual: '',
    contX: '',
    contY: '',
    anos: '',
  }

  
  nome = new FormControl('', [Validators.minLength(5)])
  salario = new FormControl('', [Validators.required])
  reajuste = new FormControl('', [Validators.required])
  contribuicaoX = new FormControl('', [Validators.required])
  contribuicaoY = new FormControl('', [Validators.required])
  qtd_Anos = new FormControl('', [Validators.required])

  constructor(
    private router: Router,
    private service: UsuarioService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.findById
  }

  findById():void{
    this.service.findById(this.id).subscribe(resposta =>{
      this.usuario = resposta;
    })
  }

  cancel(): void{
    this.router.navigate(['/']);
  }
  
total():void{
  this.service.calcular(this.usuario).subscribe((resposta : any) => {
  this.usuario = resposta;
  this.router.navigate(['usuarios/:id'])
  
})
}

create(): void {
  this.service.create(this.usuario).subscribe((resposta) => {
    this.router.navigate(['usuarios'])
    this.service.message('Usuario Criado com sucesso!')
  }, err => {
    console.log(err)
 
  })
}


errorValidNome() {
  if(this.nome.invalid) {
    return 'O nome deve ter entre 5 e 50 caracteres!';
  }
  return false;
}


errorValidSalario() {
  if(this.salario.invalid) {
    return 'Informe seu Salário';
  }
  return false;
}
errorValidReajuste() {
  if(this.reajuste.invalid) {
    return 'Informe o Reajuste Anual do seu Salário';
  }
  return false;
}
errorValidContribuicaoX() {
  if(this.contribuicaoX.invalid) {
    return 'Informe a porcentagem da 1ª contribuição mensal';
  }
  return false;
}


errorValidContribuicaoY() {
  if(this.contribuicaoY.invalid) {
    return 'Informe a porcentagem da 2ª contribuição mensal';
  }
  return false;
}

errorValidqtd_Anos() {
  if(this.qtd_Anos.invalid) {
    return 'Informe a quantidade de Anos para simular';
  }
  return false;
}

final(): void{
  this.router.navigate(['usuarios/']);
}

}
