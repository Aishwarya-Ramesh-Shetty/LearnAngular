import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBudgetTracker } from './personal-budget-tracker';

describe('PersonalBudgetTracker', () => {
  let component: PersonalBudgetTracker;
  let fixture: ComponentFixture<PersonalBudgetTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalBudgetTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalBudgetTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
