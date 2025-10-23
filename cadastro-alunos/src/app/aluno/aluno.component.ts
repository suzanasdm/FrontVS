import { Component } from '@angular/core';
import { CommonModule, NgForOf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { FormsModule } from '@angular/forms';
import { ALuno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  imports: [FormsModule,CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
novoAluno: ALuno = {
  ra: '',
  nome:'',
  DtNascimento: '',
  curso: ''
};
listaAlunos: ALuno []= [];

constructor (private alunoservice: AlunoService){
  this.listaAlunos = this.alunoservice.getAlunos();
}
adicionarAluno(){
  this.alunoservice.adicionarAluno({...this.novoAluno});
  this.novoAluno = {ra: '',nome: '',DtNascimento:'',curso:''};
}
}
