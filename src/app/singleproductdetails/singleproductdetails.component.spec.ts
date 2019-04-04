import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductdetailsComponent } from './singleproductdetails.component';

describe('SingleproductdetailsComponent', () => {
  let component: SingleproductdetailsComponent;
  let fixture: ComponentFixture<SingleproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
