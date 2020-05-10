import { Component, OnInit } from '@angular/core';
import { SucculentService } from '../../shared/services/succulent.service';
import { faSearch, faFilter, faTable, faBorderAll } from '@fortawesome/free-solid-svg-icons';

import * as _ from 'lodash';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  public faSearch = faSearch;
  public faFilter = faFilter;
  public faTable = faTable;
  public faBorderAll = faBorderAll;

  public fullList = [];
  public tableActive = true;
  public tileActive = false;
  public searchActive = false;
  public filterActive = false;
  public activeFilters = [];
  constructor(private sucService:SucculentService) { }

  ngOnInit() {
    const sucObservable = this.sucService.getSucs()
    if(sucObservable) {
        sucObservable.subscribe((sucs:any) => {
          this.fullList = sucs;
        });
      }
  }
  getFieldNames() {
    return _.uniq(_.flatten(_.map(this.getDisplayItems(), item => { return Object.keys(item) })));
  }
  
  getOptions(fieldName) {  
    if (!this.activeFilters[fieldName]) {
      this.activeFilters[fieldName] = [];
    }
    let displayItems = this.getDisplayItems();
    if(displayItems[0][fieldName] instanceof Array) {
      return _.map(_.uniq(_.flatten(_.map(displayItems, (item) => { return item[fieldName] }))), (item) => {return {name: item, active:this.activeFilters[fieldName].indexOf(item) !== -1}});    
    } else {
      return _.uniq(_.map(displayItems, (item) => { return { name:item[fieldName], active: this.activeFilters[fieldName].indexOf(item[fieldName]) !== -1 }}));
    }
  }
  toggleOption(option,fieldName) {
    let targetIndex = this.activeFilters[fieldName].indexOf(option.name)
    if(targetIndex === -1) {
      this.activeFilters[fieldName].push(option.name)
    } else {
      this.activeFilters[fieldName].splice(targetIndex,1);
    }
  }
  getDisplayItems() {
    return this.fullList;
  }
  openTable(useFilter) {
    this.tileActive=false;
    this.tableActive=true;
    this.filterActive = useFilter ? !this.filterActive : false;
  }
  openTile() {
    this.tableActive=false;
    this.tileActive=true;
  }
  openSearch() {
      this.searchActive = true;
  }

  isArray(prop) {
    return prop instanceof Array;
  }
}
