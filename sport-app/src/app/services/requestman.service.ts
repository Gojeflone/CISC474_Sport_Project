import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RequestmanResponse } from '../models/requestman-response';

@Injectable({
  providedIn: 'root'
})
export class RequestmanService {
  lastRequestedUrl: string = null;
  subject: Subject<RequestmanResponse>;
  currentSubscription: Subscription = null;

  constructor(private httpClient: HttpClient) {
    this.subject = new BehaviorSubject<RequestmanResponse>(null);
    this.subject.next(null);
  }

  update(url: string) {
    this.lastRequestedUrl = url;

    if (url === '') {
      this.subject.next(null);
      return;
    }

    if (!url.match(/^http(s?):\/\/.+\..+/)) {
      this.subject.next({
        isError: true,
        response: {error: 'Invalid URL'}
      });
      return;
    }

    this.subject.next(null); // Clear current result from the screen
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }

    this.currentSubscription = this.httpClient.get<{}>(url).pipe(
      map(x => ({isError: false, response: x})),
      catchError(error => {
        return of({isError: true, response: error});
      })
    ).subscribe(
      x => {
        this.subject.next(x);
      }
    );
  }

  getObservable(): Observable<RequestmanResponse> {
    return this.subject.asObservable();
  }

  resend() {
    if (this.lastRequestedUrl) {
      this.update(this.lastRequestedUrl);
    }
  }
}
