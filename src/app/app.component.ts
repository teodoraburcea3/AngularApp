import { Component, ViewChild } from '@angular/core';
import {Book} from './book.model';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounce', [
      transition(':enter', animate('1s', keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(-30px)', offset: 0.4 }),
        style({ transform: 'translateY(-15px)', offset: 0.6 }),
        style({ transform: 'translateY(0)', offset: 1 })
      ])))
    ])
  ]
})
export class AppComponent {
  title = 'Books';
  selectedBook: Book | null = null;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  books: Book[] = [
    new Book(1,'Love in the Time of Cholera','Gabriel García Márquez','In their youth, Florentino Ariza and Fermina Daza fall passionately in love. When Fermina eventually chooses to marry a wealthy, well-born doctor, Florentino is heartbroken, but he is a romantic. As he rises in his business career he whiles away the years in 622 affairs—yet he reserves his heart for Fermina. Her husband dies at last, and Florentino purposefully attends the funeral. Fifty years, nine months, and four days after he first declared his love for Fermina, he will do so again.','assets/holera.jpg',4.9,4.8,4.9),
    new Book(2,'Carrie','Stephen King','Carrie is a 1974 horror novel by American author Stephen King. Set in Chamberlain, Maine, the plot revolves around Carrie White, a friendless, bullied high-school girl from an abusive religious household who discovers she has telekinetic powers.','assets/carrie.jpg',5,4.8,4.9),
    new Book(3,'The murder of Roger Ackroyd','Agatha Christie','Roger Ackroyd was a man who knew too much. He knew the woman he loved had poisoned her first husband. He knew someone was blackmailing her – and now he knew she had taken her own life with a drug overdose. Soon the evening post would let him know who the mystery blackmailer was. But Ackroyd was dead before he’d finished reading it – stabbed through the neck where he sat in the study.','assets/roger.jpeg', 4.3,5,4.6)
  
  ]

  constructor(private router: Router){}
  

  onBookClick(book: Book){
    this.selectedBook = book;
    this.sidenav.close();
    
  }
  onToggleSidenavClick(){
    this.sidenav.toggle();
  }

  onTitleClick(){

    this.clearSelectedBook();
    this.router.navigate(['/']);
    
  }

  clearSelectedBook(){
    this.selectedBook=null;
  }
 
    
}
