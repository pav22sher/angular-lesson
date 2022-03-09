import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson6Component} from "./lesson6.component";

@NgModule({
  declarations: [
    Lesson6Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson6Component]
})
export class Lesson6Module {
}
