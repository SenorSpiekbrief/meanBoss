import { Component, ElementRef, OnInit, HostListener, ViewChild } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-browse-container',
  templateUrl: './browse-container.component.html',
  styleUrls: ['./browse-container.component.scss']
})
export class BrowseContainerComponent implements OnInit {

  public itemList;

  @HostListener('window:scroll') 
    onMouseOver() { 
    let pageY = window.pageYOffset;
    if(this.listView.nativeElement.offsetHeight <= pageY+ this.elementView.nativeElement.offsetHeight) {
      this.itemList.push(...this.itemList)
    }
  }

  @ViewChild('#browseContainer') 
  elementView: ElementRef;
  
  @ViewChild('#listContainer')
  listView: ElementRef;

  constructor(public $state: StateService) { 
    this.itemList = [{
      title: 'vetplant',
      detailId : 'vetplant',
      image :{
        thumb : './assets/vetplant.jpg'
      }
    },{
      title:'vetplant',
      detailId : 'vetplant',
      image : {
        thumb : './assets/vetplant.jpg'
      }
    },{
      title: 'vetplant',
      detailId : 'vetplant',
      image : {
        thumb : './assets/vetplant.jpg'
      }
    }];
  }

  ngOnInit() {
  }

}
