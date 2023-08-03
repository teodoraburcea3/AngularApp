import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book-details/book-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],

})
export class ContributeComponent {
  newBook: Book = new Book(); // Create a new book object to store the form data

  constructor(private router: Router, private bookService: BookService) {}

  onSubmit() {
    // Add the new book to the list of books in the BookService
    this.bookService.addBook(this.newBook);
    // Navigate back to the main page
    this.router.navigate(['/']);
  }
}
