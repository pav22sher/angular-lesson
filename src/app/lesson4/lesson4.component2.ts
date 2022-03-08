import {Component} from '@angular/core';

@Component({
  selector: 'child-lesson4-app',
  template: `
    <p>{{ counter }}</p>
  `,
})
export class Lesson4Component2 {
  counter: number = 0
  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
}
