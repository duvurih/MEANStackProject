import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyD3chartsComponent } from './my-d3charts.component';

describe('MyD3chartsComponent', () => {
  let component: MyD3chartsComponent;
  let fixture: ComponentFixture<MyD3chartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyD3chartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyD3chartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
