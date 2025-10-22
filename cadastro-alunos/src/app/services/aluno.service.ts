import { Injectable } from "@angular/core"
import { ALuno } from "../models/aluno.model"

@Injectable({
    providedIn: 'root',

})
export class AlunoService {

    private alunos: ALuno [] = [];
    adicionarAluno(aluno: ALuno): void{
        this.alunos.push(aluno);

    }
    getAlunos(): ALuno[]{
        return this.alunos

    }

}