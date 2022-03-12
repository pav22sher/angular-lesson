import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'lesson10-app',
  styleUrls: [
    'lesson10.component.css',
  ],
  templateUrl: 'lesson10.component.html',
})
export class Lesson10Component {
  onSubmit(form: NgForm) {
    console.log(form)
  }
}
