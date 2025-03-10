import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../interfaces/task.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule], // Adiciona FormsModule para two-way binding
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  animations: [
    trigger('taskAnimation', [
      transition(':leave', [ // Aplica quando um item sai da lista
        style({ opacity: 1, transform: 'translateX(0)' }), // Estado inicial
        animate('300ms ease', style({ opacity: 0, transform: 'translateX(100%)' })) // Estado final
      ])
    ])
  ]
})

export class TaskListComponent {
  tasks: Task[] = [];
  newTask: string = ''; // Para armazenar o texto do input
  errorMessage: string = '';
  showCongrats: boolean = false;
 
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number{
    return this.tasks.filter(task => task.completed).length;
  }

  addTask(): void {
    const trimmedTask = this.newTask.trim(); // Remove espaços em branco no início e fim

    if (!trimmedTask) { // Verifica se está vazio
      this.errorMessage = 'A tarefa não pode estar vazia. Escreva pelo menos 3 caracteres.';
    } else if (trimmedTask.length < 3) { // Verifica se tem menos de 3 caracteres
      this.errorMessage = 'A tarefa deve ter pelo menos 3 caracteres.';
    } else {
      this.taskService.addTask(trimmedTask); // Adiciona a tarefa
      this.newTask = ''; // Limpa o input
      this.errorMessage = ''; // Limpa a mensagem de erro
      this.tasks = this.taskService.getTasks(); // Atualiza a lista
    }
  }

  removeTask(id: number): void {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTasks(); //Para forçar a atualização
  }

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
    this.tasks = this.taskService.getTasks();
    // Verifica se a tarefa foi concluída e dispara a animação
    const task = this.tasks.find(t => t.id === id);
    if (task && task.completed) {
      this.showCongrats = true;
      // Esconde a animação após 3 segundos
      setTimeout(() => {
        this.showCongrats = false;
      }, 3000);
  }
}
}
