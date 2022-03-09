import {Component} from '@angular/core';

//Директива ngClass позволяет определить набор классов, которые будут применяться к элементу
@Component({
  selector: 'lesson5-app',
  template: `
    <div [ngClass]="{ invisible: visibility }">
      <h1>Hello Angular 5</h1>
      <p bold>
        Angular 5 представляет модульную архитектуру
        приложения
      </p>
    </div>
    <button (click)="toggle()">Toggle</button>
  `,
  styles: [
    `
      .invisible {
        display: none;
      }
    `,
  ],
})
export class Lesson5Component {
  visibility: boolean = true
  toggle() {
    this.visibility = !this.visibility
  }
}
