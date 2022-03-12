import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Lesson9Component} from "./lesson9.component";

@NgModule({
  declarations: [
    Lesson9Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    Lesson9Component
  ]
})
export class Lesson9Module {
}
