import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-app';
  sortCatagory: string = '';
  view = 'list-view';

  sortWith(sortData: string){
    this.sortCatagory = sortData;
  }

  showView(view: string){
    this.view = view;
  }

}
