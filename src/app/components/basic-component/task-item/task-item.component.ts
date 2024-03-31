import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemsComponent  {
 

  @Input() task : Task = {} as Task;
  selectedTasks: Task[] = [];


  constructor( private _requestService:RequestService){}
  
  
 

  selectedTask( taskId : string){
 
      this._requestService.markTask(taskId).subscribe({
       next:(res:any)=>{
         
         if(res.completed == "true"){
          res.completed ="false"
          console.log(res.completed);
         }
         else{
          res.completed ="true"
          console.log(res.completed);
         }
       }
      })

  }


}
