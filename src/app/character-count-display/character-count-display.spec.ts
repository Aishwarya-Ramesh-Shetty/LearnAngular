import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCountDisplay } from './character-count-display';

describe('CharacterCountDisplay', () => {
  let component: CharacterCountDisplay;
  let fixture: ComponentFixture<CharacterCountDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCountDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCountDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
