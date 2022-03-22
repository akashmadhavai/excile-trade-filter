import { Item, Stash } from './../shared/models/stash';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StashesService } from '../shared/services/stashes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() stashes = [];
  originalStash;
  selectedStash:Stash = null;
  selectedStashItems: Item[] = [];
  constructor(private service: StashesService) {
    this.service.dropdownSelect.subscribe((data) => {
     this.stashes = this.originalStash;
      if(data){
        let filtered = this.stashes.filter((stash) => {
          return stash.league == data.label;
        });
        this.stashes = filtered;
      } else {
        this.stashes = this.originalStash;
      }
      this.selectedStash = null;
      this.selectedStashItems = [];
    });

    this.service.onSearchKeyUp.subscribe(data=>{
      console.log('from results:', data)
      if(data.length > 0) {
        let searchFiltered = this.stashes.filter(stash=>{
          return stash.id.includes(data)
        })
       this.stashes = searchFiltered;
      } else {
        this.selectedStash = null;
        this.selectedStashItems = [];
        this.stashes = this.originalStash;
      }
    })
  }
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.stashes = changes.stashes.currentValue;
    this.selectedStash = this.stashes[0];
    console.log('selected stash:',this.selectedStash)
    this.originalStash = this.stashes;
  }

  onStashClick(event){
    this.selectedStash = event;
    this.selectedStashItems = this.selectedStash.items
    console.log(this.selectedStashItems)
  }
}
