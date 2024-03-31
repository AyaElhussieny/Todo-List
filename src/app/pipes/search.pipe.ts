import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allTasks: Task[], searchKey: string): Task[] {
    return allTasks.filter((ele)=> ele.title.toLowerCase().includes(searchKey.toLowerCase()));
  }

}
