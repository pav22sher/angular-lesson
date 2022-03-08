import { Component } from '@angular/core';

//Передача html и данных в дочерний компонент
@Component({
  selector: 'lesson4-app',
  template: `
    <child-lesson4-app #counter></child-lesson4-app>
    <button (click)="counter.increment()">+</button>
    <button (click)="counter.decrement()">-</button>
  `,
})
export class Lesson4Component {
  name = 'Даня'
  userName: string = 'Tom'
  userAge: number = 24
}
