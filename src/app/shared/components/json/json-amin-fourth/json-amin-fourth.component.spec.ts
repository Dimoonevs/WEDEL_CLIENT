import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminFourthComponent } from './json-amin-fourth.component';

describe('JsonAminFourthComponent', () => {
  let component: JsonAminFourthComponent;
  let fixture: ComponentFixture<JsonAminFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminFourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
