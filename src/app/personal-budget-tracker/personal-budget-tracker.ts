import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-budget-tracker',
  imports: [FormsModule,CommonModule],
  templateUrl: './personal-budget-tracker.html',
  styleUrl: './personal-budget-tracker.css',
})
export class PersonalBudgetTrackerComponent {
  expenses: { description: string; amount: number }[] = [];
  newExpense = { description: '', amount: 0 };
  totalExpenses = 0;
  addTransaction(){
    if(this.newExpense.description && this.newExpense.amount > 0){
      this.expenses.push({...this.newExpense});
      this.newExpense = {description:'',amount:0};
      console.log('Transaction added:', this.expenses);
    }
  }

  get totalAmount(){
    let sum =0;
    for(let item of this.expenses){
      sum = sum +item.amount;
    }
    return sum;
  }
}
