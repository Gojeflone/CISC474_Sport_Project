import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiListService } from './services/api-list.service';
import { ApiList } from './models/api-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sport-app';
  apiList$: Observable<ApiList>;

  constructor(private apiListService: ApiListService) { }

  ngOnInit() {
    this.apiList$ = this.apiListService.getData();
  }
}
