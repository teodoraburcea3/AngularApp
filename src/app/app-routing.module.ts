
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { Book } from './book.model';
import { BookDetailsComponent } from './book-details/book-details.component';


const routes: Routes = [
    {path: 'books', component: AppComponent},
    {path: 'books/:id',component: BookDetailsComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}