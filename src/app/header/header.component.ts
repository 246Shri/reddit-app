import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sortingTopic = new EventEmitter<string>();
  @Output() showView = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sortData(catagory: string){
    this.sortingTopic.emit(catagory);
  }

  setUpView(view: string){
    this.showView.emit(view);
  }

}
