import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiList } from '../../models/api-list.model';
import { ApiListService } from '../../services/api-list.service';

@Component({
  selector: 'app-list-of-apis',
  templateUrl: './list-of-apis.component.html',
  styleUrls: ['./list-of-apis.component.css']
})
export class ListOfApisComponent implements OnInit {
  apiList$: Observable<ApiList>;
  //initializing p to one
  p: number = 1;

  constructor(private apiListService: ApiListService) { }

  ngOnInit() {
    this.apiList$ = this.apiListService.getData();
  }
}
