import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Object> {
    return this.http.get('https://api.publicapis.org/entries?cors=yes');
  }
}
