import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiListService } from './services/api-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sport-app';
  apiList$: Observable<Object>;

  constructor(private apiListService: ApiListService) { }

  ngOnInit() {
    this.apiList$ = this.apiListService.getData();
  }
}
