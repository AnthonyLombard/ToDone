import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'authors',
  templateUrl:'./authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  authors;number
  count;
  constructor(service:AuthorServiceService) {
    this.count = service.countAuthors();
    this.authors = service.getAuthors();
  }

  submitTask(form){
    console.log(form.value);
  }

}
