import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'authors',
  templateUrl:'./authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  tasks;
  count;
  newTask;

  constructor(public service:AuthorServiceService) {
    this.count = service.countTasks();
    this.tasks = service.getTasks();
    
  }

  submitTask(form){
    this.service.addTask(form)
  }
}
