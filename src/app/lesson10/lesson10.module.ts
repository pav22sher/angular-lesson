import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Lesson10Component} from "./lesson10.component";

@NgModule({
  declarations: [
    Lesson10Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    Lesson10Component
  ]
})
export class Lesson10Module {
}
