import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminSixthComponent } from './json-amin-sixth.component';

describe('JsonAminSixthComponent', () => {
  let component: JsonAminSixthComponent;
  let fixture: ComponentFixture<JsonAminSixthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminSixthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
