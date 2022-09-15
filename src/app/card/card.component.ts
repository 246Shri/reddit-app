import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RadditAPI } from '../raddit-aww.services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() item: any;
  redditAPI: any;
  limit: number = 9;
  constructor(private redditApi: RadditAPI) { }

  ngOnInit(): void {
    this.loadData(this.limit, this.item)
  }

  ngOnChanges(changes: SimpleChanges){
    this.loadData(this.limit, this.item);
  }

  loadData(limit: number, item: any) {
    this.redditApi.getRadditApi(limit, item).subscribe((redditData: any) => {
      this.redditAPI = redditData.data.children
    });
  }

  loadMoreReslts(){
    this.limit = this.limit +  10;
    this.loadData(this.limit,this.item)
  }

  @HostListener('document:scroll', ['$event']) addNewRecord(){
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      this.loadMoreReslts();
    }
  }

}
