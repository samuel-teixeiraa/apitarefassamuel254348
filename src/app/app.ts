import { Component, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule aqui
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item';
import { Tarefa } from "./tarefa";

@Component({
  selector: 'app-root',
  standalone: true,
  // Adicione o HttpClientModule nos imports para que o serviço de HTTP funcione
  imports: [CommonModule, ItemComponent, HttpClientModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'TODOapp';
  arrayDeTarefas = signal<Tarefa[]>([]);  
  apiURL: string = 'https://apitarefassamuel254348-1.onrender.com';   

  constructor(private http: HttpClient) {
    this.READ_tarefas();
  }

  READ_tarefas() {
    this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`).subscribe(res => {
      this.arrayDeTarefas.set(res);
    });
  }

  CREATE_tarefa(descricao: string) {
    if (!descricao || !descricao.trim()) return;
    const novaTarefa = { descricao: descricao, statusRealizada: false };
    this.http.post(`${this.apiURL}/api/post`, novaTarefa).subscribe(() => {
      this.READ_tarefas();
    });
  }

  UPDATE_tarefa(tarefa: Tarefa) {
    this.http.patch(`${this.apiURL}/api/update/${tarefa._id}`, { statusRealizada: !tarefa.statusRealizada }).subscribe(() => {
      this.READ_tarefas();
    });
  }

  DELETE_tarefa(tarefa: Tarefa) {
    this.http.delete(`${this.apiURL}/api/delete/${tarefa._id}`).subscribe(() => {
      this.READ_tarefas();
    });
  }
}
