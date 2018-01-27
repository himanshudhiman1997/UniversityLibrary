import { Component, OnInit, ViewEncapsulation ,Input,Output ,EventEmitter} from '@angular/core';
import { Event } from '@angular/router/src/events';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {

  @Input() childBooks;
  @Output() selectBook = new EventEmitter();
  public subjects: string;


  constructor() { }

  ngOnInit() {
  }
  public bookSelected(selectedBook)
  {
    this.selectBook.emit(selectedBook);
    console.log(`Book selected: ${selectedBook}`);
  }
  public parentSharedMethod()
  {
    alert("Shared method called from parent");
  }
}
