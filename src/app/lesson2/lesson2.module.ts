import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson2Component} from "./lesson2.component";

@NgModule({
  declarations: [
    Lesson2Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson2Component]
})
export class Lesson2Module {
}
