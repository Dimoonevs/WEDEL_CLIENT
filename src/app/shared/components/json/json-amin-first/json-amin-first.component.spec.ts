import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminFirstComponent } from './json-amin-first.component';

describe('JsonAminFirstComponent', () => {
  let component: JsonAminFirstComponent;
  let fixture: ComponentFixture<JsonAminFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
