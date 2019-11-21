import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { __await } from 'tslib';
import { async } from 'q';

@Component({
  selector: 'authors',
  templateUrl:'./authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  
  tasks;
  count;
  newTask;

  constructor (public service:AuthorServiceService, _http:HttpClient) {
  }

  async ngOnInit() {
    this.tasks = await this.service.getTasks();
    this.count = this.service.countTasks(this.tasks);
  }

  submitTask(form){
    this.service.addTask(form)
  }
}
