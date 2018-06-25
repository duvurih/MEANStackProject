import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgxchartsComponent } from './my-ngxcharts.component';

describe('MyNgxchartsComponent', () => {
  let component: MyNgxchartsComponent;
  let fixture: ComponentFixture<MyNgxchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgxchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgxchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
