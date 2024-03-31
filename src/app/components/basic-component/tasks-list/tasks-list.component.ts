import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {

  allTasks :Task[] =[];
  searchKey : string="";
  isLightTheme : boolean = true;

  darkTheme : string = "  background-color: black ; color:teal;";

  lightTheme : string = "  background-color: white ; color:black;";


    constructor(private _requestService:RequestService){
      this.getAllTasks();
    }

    getAllTasks(){
     this._requestService.getTasks().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allTasks = res;
      }
     })
    }
    
    addTask(){
      this._requestService.addTask().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.getAllTasks();
        }
       })
    }


    deleteTask(id : string){
      this._requestService.deleteTask(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.getAllTasks();
        }
       })
    
    }
    
    toggelTheme(){
      this.isLightTheme = !this.isLightTheme;
    }
}
