import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiList } from '../models/api-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ApiList> {
    return this.http.get<ApiList>('https://api.publicapis.org/entries');
  }
}
