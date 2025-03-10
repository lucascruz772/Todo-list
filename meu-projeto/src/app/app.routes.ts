import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Raiz leva para Home
    { path: 'tasks', component: TaskListComponent },
    { path: '**', redirectTo: '' } // Qualquer rota inválida vai para Home
  ];