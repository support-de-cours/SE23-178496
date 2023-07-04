import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { HomepageModule } from './homepage/homepage.module';
import { ContactModule } from './contact/contact.module';
import { BooksModule } from './books/books.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    HomepageModule,
    AboutModule,
    ContactModule,
    BooksModule
  ]
})
export class PagesModule { }
