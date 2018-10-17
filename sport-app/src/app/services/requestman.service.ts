import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestmanService {
  lastRequestedUrl: string = null;
  subject: Subject<any>;
  currentSubscription: Subscription = null;

  constructor(private httpClient: HttpClient) {
    this.subject = new BehaviorSubject<any>(null);
    this.subject.next({string: 'Hello!'});
  }

  update(url: string) {
    this.lastRequestedUrl = url;

    this.subject.next(null); // Clear current result from the screen
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }

    this.currentSubscription = this.httpClient.get<any>(url).pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe(
      x => {
        this.subject.next(x);
      }
    );
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  resend() {
    if (this.lastRequestedUrl) {
      this.update(this.lastRequestedUrl);
    }
  }
}
