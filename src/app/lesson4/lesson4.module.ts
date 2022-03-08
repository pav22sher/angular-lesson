import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson4Component} from "./lesson4.component";
import {Lesson4Child} from "./lesson4.child";

@NgModule({
  declarations: [
    Lesson4Component,Lesson4Child
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson4Component]
})
export class Lesson4Module {
}
