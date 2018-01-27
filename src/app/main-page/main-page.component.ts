import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { Books } from './../constants/library-constants';
import { book } from '../models/book';
import { BooksService } from '../books.service';
import { BookInterface } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { DatatableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MainPageComponent implements OnInit {


  public buttonstate = false;
  public studentname = "Himanshu";
  public parentBooks: Array<book>;
  public book2: BookInterface;
  public selectedBookName: string;


  @ViewChild(DatatableComponent) 
  private datatableComponent: DatatableComponent;
  
  public clickSubmit() {
    this.datatableComponent.parentSharedMethod();
    alert("successfully");
  }
  
  public mybook = new book('Science', 'SomeABC');
  constructor(private booksService:BooksService , private http: HttpClient) {
    console.log("header component is created");
    console.log(`The value of my book is : ${this.mybook}`);
    //this.books = booksService.getBooksList();

    // for(let i in this.parentBooks)
    // {
    //   let bookEntryDate = this.parentBooks[i].entryDate;
    //     if(typeof bookEntryDate != "object")
    //     {
    //       if(bookEntryDate != undefined)
    //         {
    //             this.parentBooks[i].entryDate = new Date(bookEntryDate.slice(0,4),bookEntryDate.slice(5,7),bookEntryDate.slice(8));
    //         }
    //     }
    // }
    this.http.get<book[]>('http://localhost:3000/books').subscribe(
      response => {
        this.parentBooks = response;
      }, error => {
        alert("some error");
      }
    );
  }
  //this.http.post('http://localhost:3000/books');

  ngOnInit() {
    console.log("ngOnInit method is created");
    this.book2 = {name: '',volume: 1,entryDate: ''}

  }
  
  ngOnChanges() {
    console.log("Some change in the component");
  }
  public showTable: boolean = true;
  
  toogleTableVisibility(){
    this.showTable = !(this.showTable)
  }

  public func(number)
  {
    return 'f';
  }
  public bookSelected(selectedBook)
  {
    this.selectedBookName = selectedBook.name;
    console.log(this.selectedBookName);
  }

}
