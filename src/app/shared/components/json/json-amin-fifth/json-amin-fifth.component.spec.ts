import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminFifthComponent } from './json-amin-fifth.component';

describe('JsonAminFifthComponent', () => {
  let component: JsonAminFifthComponent;
  let fixture: ComponentFixture<JsonAminFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminFifthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
