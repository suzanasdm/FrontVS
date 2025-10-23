import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
@Component({
  selector: 'app-root',
  imports: [ AlunoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro-alunos';
}
