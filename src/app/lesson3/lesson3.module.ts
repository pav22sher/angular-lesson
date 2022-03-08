import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson3Component} from "./lesson3.component";
import {Lesson3Child} from "./lesson3.child";

@NgModule({
  declarations: [
    Lesson3Component,Lesson3Child
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson3Component]
})
export class Lesson3Module {
}
