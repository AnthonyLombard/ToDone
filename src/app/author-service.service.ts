import { Injectable } from '@angular/core';
import { AuthorsComponent } from './authors/authors.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  tasks;

  constructor(private _http: HttpClient) {
  }

   async getTasks(){
      let url = 'http://localhost:8080/api/getTasks';
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.get(url,{
        headers: headers 
      }).toPromise();
    };

  countTasks(tasks){
    return tasks.length;
  }

  addTask(newTask){
    let url = 'http://localhost:8080/api/addtask';
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      let task = newTask.value
      this._http.post(url, {"task":task['task'],"status":"todo"}, {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });
  }

}
