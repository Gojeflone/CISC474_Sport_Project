import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestman',
  templateUrl: './requestman.component.html',
  styleUrls: ['./requestman.component.css']
})
export class RequestmanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updated(event: KeyboardEvent) {
    const element: HTMLInputElement = event.srcElement as HTMLInputElement;
    console.dir(element.value);
  }

}
