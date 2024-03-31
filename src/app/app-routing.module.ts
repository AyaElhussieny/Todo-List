import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/basic-component/tasks-list/tasks-list.component';
import { NotfoundComponent } from './components/basic-component/notfound/notfound.component';

const routes: Routes = [ 
  
{path:"",redirectTo:"TasksList",pathMatch:"full"},
{path:"TasksList",component:TasksListComponent,title:"Todo List"},
// { path: "CreateTask", loadChildren: () => import('./components/basic-component/create-task/create-task.component').then(m => m.CreateTaskComponent),title:"Create Task" },




{path:"**",component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
