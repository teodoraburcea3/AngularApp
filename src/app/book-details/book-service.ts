

import { Injectable } from '@angular/core';
import { Book } from '../book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    new Book(1,'Love in the Time of Cholera','Gabriel García Márquez','In their youth, Florentino Ariza and Fermina Daza fall passionately in love. When Fermina eventually chooses to marry a wealthy, well-born doctor, Florentino is heartbroken, but he is a romantic. As he rises in his business career he whiles away the years in 622 affairs—yet he reserves his heart for Fermina. Her husband dies at last, and Florentino purposefully attends the funeral. Fifty years, nine months, and four days after he first declared his love for Fermina, he will do so again.','"C:\Users\TBU19860\Desktop\holera.jpg"',4.9,4.8,4.9),
    new Book(2,'Carrie','Stephen King','Carrie is a 1974 horror novel by American author Stephen King. Set in Chamberlain, Maine, the plot revolves around Carrie White, a friendless, bullied high-school girl from an abusive religious household who discovers she has telekinetic powers.','"C:\Users\TBU19860\Desktop\carrie.jpg"',5,4.8,4.9),
    new Book(3,'The murder of Roger Ackroyd','Agatha Christie','Roger Ackroyd was a man who knew too much. He knew the woman he loved had poisoned her first husband. He knew someone was blackmailing her – and now he knew she had taken her own life with a drug overdose. Soon the evening post would let him know who the mystery blackmailer was. But Ackroyd was dead before he’d finished reading it – stabbed through the neck where he sat in the study.','"C:\Users\TBU19860\Desktop\roger.jpeg"',4.3,5,4.6)

  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    // Generate a unique ID for the new book
    const newId = this.books.length + 1;
    // Set the new book's ID
    book.id = newId;
    // Add the new book to the list
    this.books.push(book);
  }
}
