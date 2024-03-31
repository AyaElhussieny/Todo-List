import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient}from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _httpClient:HttpClient) { }

  getTasks() : Observable<any>{
    return this._httpClient.get(`https://66063f72d92166b2e3c378fc.mockapi.io/Task`);
  }

  addTask() : Observable<any>{
    return this._httpClient.post(`https://66063f72d92166b2e3c378fc.mockapi.io/Task`,
    Headers);
  }


  markTask(id :string) : Observable<any>{
    return this._httpClient.put(`https://66063f72d92166b2e3c378fc.mockapi.io/Task/${id}`,Headers);
  }


  deleteTask(id : string): Observable<any>{
    return this._httpClient.delete(`https://66063f72d92166b2e3c378fc.mockapi.io/Task/${id}`);

  }
}
