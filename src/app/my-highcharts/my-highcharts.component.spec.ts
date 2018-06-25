import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHighchartsComponent } from './my-highcharts.component';

describe('MyHighchartsComponent', () => {
  let component: MyHighchartsComponent;
  let fixture: ComponentFixture<MyHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
