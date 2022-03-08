import { Component } from '@angular/core';

//Передача html и данных в дочерний компонент
@Component({
  selector: 'lesson3-app',
  template: `
    <child-lesson3-app
      [userName]="userName"
      [userAge]="userAge"
    >
      <h2>Добро пожаловать {{ name }}!</h2>
    </child-lesson3-app>
  `,
})
export class Lesson3Component1 {
  name = 'Даня'
  userName: string = 'Tom'
  userAge: number = 24
}
