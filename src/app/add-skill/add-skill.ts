import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-skill',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-skill.html',
  styleUrl: './add-skill.css',
})
export class AddSkillComponent {
  skills = ['Angular', 'TypeScript', 'JavaScript'];
  newSkill = '';
  today = new Date();

  addSkill(){
    this.skills.push(this.newSkill);
    this.newSkill = '';
    console.log(this.skills);
  }

  deleteSkill(index:number){
    this.skills.splice(index, 1);
  }

  // Learned about splice that deletes an 
  // element from array here 1 is no of element to be deleted and index is position
}
