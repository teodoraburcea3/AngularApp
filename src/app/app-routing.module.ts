
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { Book } from './book.model';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ContributeComponent } from './contribute/contribute.component';


const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'books/:id',component: BookDetailsComponent},
    {path: 'contribute', component: ContributeComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}