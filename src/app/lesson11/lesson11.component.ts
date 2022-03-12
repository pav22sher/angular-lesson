import { Component } from '@angular/core'
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'

@Component({
  selector: 'lesson11-app',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `,
  ],
  template: `
    <form
      [formGroup]="myForm"
      novalidate
      (ngSubmit)="submit()"
    >
      <div class="form-group">
        <label>Имя</label>
        <input
          class="form-control"
          name="name"
          formControlName="userName"
        />

        <div
          class="alert alert-danger"
          *ngIf="
            myForm.controls['userName'].invalid &&
            myForm.controls['userName'].touched
          "
        >
          Не указано имя
        </div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          class="form-control"
          name="email"
          formControlName="userEmail"
        />

        <div
          class="alert alert-danger"
          *ngIf="
            myForm.controls['userEmail'].invalid &&
            myForm.controls['userEmail'].touched
          "
        >
          Некорректный email
        </div>
      </div>
      <div class="form-group">
        <button
          class="btn btn-default"
          [disabled]="myForm.invalid"
        >
          Отправить
        </button>
      </div>
    </form>
  `,
})
export class Lesson11Component {
  myForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userName: [
        '',
        [
          Validators.required
        ]
      ],
      userEmail: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}'),
        ],
      ],
    })
  }
  submit() {
    console.log(this.myForm)
  }
}
