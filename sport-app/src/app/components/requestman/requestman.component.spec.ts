import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmanComponent } from './requestman.component';

describe('RequestmanComponent', () => {
  let component: RequestmanComponent;
  let fixture: ComponentFixture<RequestmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
