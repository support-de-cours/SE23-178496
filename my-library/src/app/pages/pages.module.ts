import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { BooksModule } from './books/books.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule,
    BooksModule
  ]
})
export class PagesModule { }
