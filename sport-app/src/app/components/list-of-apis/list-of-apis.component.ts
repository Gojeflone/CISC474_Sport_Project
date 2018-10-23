import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiList } from '../../models/api-list.model';
import { ApiListService } from '../../services/api-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-apis',
  templateUrl: './list-of-apis.component.html',
  styleUrls: ['./list-of-apis.component.css']
})
export class ListOfApisComponent implements OnInit {
  apiList$: Observable<ApiList>;
  //initializing p to one
  p: number = 1;

  constructor(
    private apiListService: ApiListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiList$ = this.apiListService.getData();
  }

  goto(url: string) {
    this.router.navigate(['requestman'],
      {queryParams:
        {url: url}
      }
    );
  }
}
