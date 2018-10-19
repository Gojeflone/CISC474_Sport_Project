import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestmanService } from '../../services/requestman.service';

@Component({
  selector: 'app-requestman',
  templateUrl: './requestman.component.html',
  styleUrls: ['./requestman.component.css']
})
export class RequestmanComponent implements OnInit {
  result$: Observable<any>;

  constructor(private requestmanService: RequestmanService) { }

  ngOnInit() {
    this.result$ = this.requestmanService.getObservable();
  }

  updated(event: KeyboardEvent) {
    const element: HTMLInputElement = event.srcElement as HTMLInputElement;
    this.requestmanService.update(element.value);
  }

  resend() {
    this.requestmanService.resend();
  }

}
