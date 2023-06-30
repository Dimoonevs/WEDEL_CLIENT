import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregeComponent } from './arrege.component';

describe('ArregeComponent', () => {
  let component: ArregeComponent;
  let fixture: ComponentFixture<ArregeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArregeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArregeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
