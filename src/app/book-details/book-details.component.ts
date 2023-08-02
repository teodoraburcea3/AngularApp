import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from './book-service';

/*@Component({
  template:`
  <h1>{{book?.title}}</h1>
  <p>Author: {{book?.author}}</p>
  <p>Description: {{book?.description}}</p>
  `
})
*/

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {

  book: Book | undefined;
  constructor(private route:ActivatedRoute,
    private bookService: BookService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id!== null){
      const bookId = +id;    
    this.book = this.bookService.getBooks().find((b) => b.id === bookId);
   


  }
}

}
