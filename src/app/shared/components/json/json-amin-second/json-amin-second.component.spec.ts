import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminSecondComponent } from './json-amin-second.component';

describe('JsonAminSecondComponent', () => {
  let component: JsonAminSecondComponent;
  let fixture: ComponentFixture<JsonAminSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
