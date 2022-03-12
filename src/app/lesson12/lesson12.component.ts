import {Component} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms'

@Component({
  selector: 'lesson12-app',
  template: `
    <form [formGroup]="toDoForm">
      Список задач:
      <div formArrayName="toDoList">
        <div *ngFor="let skill of toDoList.controls; let i=index">
          <div [formGroupName]="i">
            Название :
            <input type="text" formControlName="skill">
            Описание :
            <input type="text" formControlName="exp">
            <button type="button" class="btn btn-danger" (click)="removeSkill(i)">Удалить</button>
          </div>
        </div>
      </div>
    </form>
    <p>
      <button type="button" class="btn btn-success" (click)="addSkills()">Добавить</button>
    </p>
  `,
})
export class Lesson12Component {
  toDoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.toDoForm = this.fb.group({
      toDoList: this.fb.array([]),
    });
  }

  get toDoList(): FormArray {
    return this.toDoForm.get("toDoList") as FormArray
  }

  addSkills() {
    this.toDoList.push(this.fb.group({
      name: '',
      description: '',
    }));
  }

  removeSkill(i: number) {
    this.toDoList.removeAt(i);
  }

}
