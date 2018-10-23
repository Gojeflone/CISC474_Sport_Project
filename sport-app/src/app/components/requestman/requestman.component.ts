import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RequestmanService } from '../../services/requestman.service';
import { RouterState, ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-requestman',
  templateUrl: './requestman.component.html',
  styleUrls: ['./requestman.component.css']
})
export class RequestmanComponent implements OnInit, OnDestroy {
  result$: Observable<any>;
  textboxValue: string;
  routeSubscription: Subscription;

  constructor(
    private requestmanService: RequestmanService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParamMap.pipe(
      map(x => x.get('url')),
      map(x => (x === undefined) ? '' : x)
    ).subscribe(x => this.update(x));
    this.result$ = this.requestmanService.getObservable();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  update(url: string) {
    this.requestmanService.update(url);
    this.textboxValue = url;
  }

  textboxUpdated(event: KeyboardEvent) {
    const element: HTMLInputElement = event.srcElement as HTMLInputElement;
    this.router.navigate([], {queryParams: {url: element.value}});
  }

  resend() {
    this.requestmanService.resend();
  }

}
