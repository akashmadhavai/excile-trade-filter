import { Component, OnInit } from '@angular/core';
import { ApiResponse, Stash } from './shared/models/stash';
import { StashesService } from './shared/services/stashes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'excile-trade-filter';
  firstId = 'b9799e92-0a0a-456f-b427-f4c67ed114f3';
  response: ApiResponse = {
    next_change_id: '',
    stashes: []
  }
  stashes: Stash[] = [];
  constructor(private service: StashesService){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getAllStashes().subscribe(data=>{
     this.stashes = [];
      data.forEach(d=>{
        d.stashes.forEach(stash=>{
          if(stash.league != null && stash.accountName != null){
            let stashObj = {
              id: '',
              league: '',
              accountName: '',
              items: []
            }

            stash.items.forEach(i=>{
              let item = {
                id: '',
                name: '',
                typeLine: ''
              }

              stashObj.id = stash.id;
              stashObj.accountName = stash.accountName;
              stashObj.league = stash.league;

              item.id = i.id;
              item.name = i.name;
              item.typeLine = i.typeLine;
              stashObj.items.push(item);
            })
            this.stashes.push(stashObj);
          }
        })
      })

    })
  }
}
