import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson1Component} from "./lesson1.component";

@NgModule({
  declarations: [
    Lesson1Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson1Component]
})
export class Lesson1Module {
}
