import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrls: ['./item.css']
})
export class ItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() removeTarefa = new EventEmitter<Tarefa>();
  @Output() modificaTarefa = new EventEmitter<Tarefa>(); // Tipado como Tarefa

  emEdicao = false;

  chamaRemover() {
    this.removeTarefa.emit(this.tarefa);
  }
}
