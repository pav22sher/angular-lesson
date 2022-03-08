import {Component} from '@angular/core';

@Component({
  selector: 'child-lesson4-app',
  template: `
    <p>{{ counter }}</p>
  `,
})
export class Lesson4Child {
  counter: number = 0
  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
}
