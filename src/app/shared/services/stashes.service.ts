import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, LeagueDropdown } from '../models/stash';
const httpOptions = {
  'Content-Type': 'application/json',
};
@Injectable({
  providedIn: 'root',
})
export class StashesService {
  constructor(private http: HttpClient) {}

  dropdownSelect = new EventEmitter<LeagueDropdown>();
  onSearchKeyUp = new EventEmitter<string>();

  getItemsById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      'http://localhost:3000/public-stash-tabs?id=' + id
    );
  }

  getAllStashes(): Observable<ApiResponse[]>{
    return this.http.get<ApiResponse[]>(
      'http://localhost:3000/public-stash-tabs'
    );
  }
}
