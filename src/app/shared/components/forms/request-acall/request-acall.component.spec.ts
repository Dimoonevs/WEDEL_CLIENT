import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestACallComponent } from './request-acall.component';

describe('RequestACallComponent', () => {
  let component: RequestACallComponent;
  let fixture: ComponentFixture<RequestACallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestACallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestACallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
