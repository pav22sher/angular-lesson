import {Component, Input} from '@angular/core';

@Component({
  selector: 'child-lesson3-app',
  template: `
    <ng-content></ng-content>
    <p>Привет {{ name }}</p>
    <p>Имя пользователя: {{ userName }}</p>
    <p>Возраст пользователя: {{ userAge }}</p>
  `,
})
export class Lesson3Child {
  name: string = 'Евгений'
  //переменные из родительского компонента
  @Input() userName: string
  _userAge: number
  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this._userAge = 0
      return
    }
    if (age > 100) {
      this._userAge = 100
      return
    }
    this._userAge = age
  }
  get userAge() {
    return this._userAge
  }
}
