import { StashesService } from './../shared/services/stashes.service';
import { Component, OnInit } from '@angular/core';
import { LeagueDropdown } from '../shared/models/stash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  constructor(private service: StashesService) { }

  leagues:LeagueDropdown[] = [
    {label: 'Hardcore', value: 'Hardcore'},
    {label: 'Standard', value: 'Standard'}
  ];

  selectedLeague:LeagueDropdown;

  ngOnInit(): void {
  }

  onLeagueSelect(event){
    console.log('league:', event.value)
    this.service.dropdownSelect.emit(event.value);
  }

  onSearch(){
    this.service.onSearchKeyUp.emit(this.searchQuery);
    console.log('search query:', this.searchQuery);
  }

  clearQuery() {
    this.searchQuery = '';
    this.service.onSearchKeyUp.emit(this.searchQuery);
  }
}
