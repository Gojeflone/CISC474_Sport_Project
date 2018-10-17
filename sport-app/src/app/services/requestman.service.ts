import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestmanService {
  subject: Subject<any>;
  currentSubscription: Subscription = null;

  constructor(private httpClient: HttpClient) {
    this.subject = new BehaviorSubject<any>(null);
    this.subject.next({string: 'Hello!'});
  }

  update(url: string) {
    this.subject.next(null);
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }

    this.currentSubscription = this.httpClient.get<any>(url).subscribe(
      x => {
        this.subject.next(x);
      }
    );
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
