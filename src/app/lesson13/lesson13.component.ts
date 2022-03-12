import {Component} from '@angular/core';

@Component({
  selector: 'lesson13-app',
  template: `
    <div>{{ myDate | date: 'dd/MM/yyyy' }}</div>
    <div>{{ welcome | uppercase }}</div>
    <div>{{ welcome | lowercase }}</div>
    <div>{{ persentage | percent }}</div>
    <div>{{ persentage | currency }}</div>
  `,
})
export class Lesson13Component {
  myDate = new Date(1961, 3, 12)
  welcome: string = 'Hello World!'
  persentage: number = 0.14
}
