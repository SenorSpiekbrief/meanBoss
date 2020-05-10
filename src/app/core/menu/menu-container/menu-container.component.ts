import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { faSearch, faBoxes, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {

  public faSearch = faSearch;
  public faBoxes = faBoxes;
  public faFolderOpen = faFolderOpen;

  constructor(public $state: StateService) { }

  ngOnInit() {
  }

  goto(stateName:string) {
    this.$state.go(stateName);
  }

}
