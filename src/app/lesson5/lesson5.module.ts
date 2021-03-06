import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {Lesson5Component} from "./lesson5.component";
import {BoldDirective} from "./bold.directive";

@NgModule({
  declarations: [
    Lesson5Component,
    BoldDirective
  ],
  imports: [BrowserModule, FormsModule],
  exports: [Lesson5Component, BoldDirective]
})
export class Lesson5Module {
}
