import { Injectable } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task [] = [];
  private nextId: number = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({
      id: this.nextId++,
      title: title,
      completed: false,
    });
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed; //Inveter o valor de completed
    }
  }
}