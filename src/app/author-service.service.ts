import { Injectable } from '@angular/core';
import { AuthorsComponent } from './authors/authors.component';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthorServiceService {
  getAuthors(){
    var authors = ["Author 1","Author 2","Author 3","Author 4"]
    return  authors
  }

  countAuthors(){
    let authors = this.getAuthors();
    return authors.length;
  }

  addAuthor(newAuthor){
    
  }
}
