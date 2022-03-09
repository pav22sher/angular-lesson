import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson7Component} from "./lesson7.component";

@NgModule({
  declarations: [
    Lesson7Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson7Component]
})
export class Lesson7Module {
}
