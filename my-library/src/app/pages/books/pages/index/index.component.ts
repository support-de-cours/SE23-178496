import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit
{
  public books: any[] = [];



  ngOnInit(): void 
  {
    setTimeout(() => {
      this.books = [
        "Book 1",
        "Book 2",
        "Book 3",
        "Book 4",
      ]
    },10000);
  }
}
