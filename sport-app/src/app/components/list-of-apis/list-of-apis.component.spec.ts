import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfApisComponent } from './list-of-apis.component';

describe('ListOfApisComponent', () => {
  let component: ListOfApisComponent;
  let fixture: ComponentFixture<ListOfApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
