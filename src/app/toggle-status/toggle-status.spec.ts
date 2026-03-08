import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleStatus } from './toggle-status';

describe('ToggleStatus', () => {
  let component: ToggleStatus;
  let fixture: ComponentFixture<ToggleStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
