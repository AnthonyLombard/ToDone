import { Injectable } from '@angular/core';
import { AuthorsComponent } from './authors/authors.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  constructor(private _http: HttpClient) {
  }
  getTasks(){
    var authors = ["Author 1","Author 2","Author 3","Author 4"]
    return  authors
  }

  countTasks(){
    let authors = this.getTasks();
    return authors.length;
  }

  addTask(newTask){
    console.log(newTask);
    let url = 'http://localhost:8080/api/addtask';
    this._http.post(url,newTask)
    console.log("hello")
  }

}
