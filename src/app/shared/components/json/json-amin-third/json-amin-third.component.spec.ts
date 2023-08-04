import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAminThirdComponent } from './json-amin-third.component';

describe('JsonAminThirdComponent', () => {
  let component: JsonAminThirdComponent;
  let fixture: ComponentFixture<JsonAminThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAminThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAminThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
