import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Lesson8Component} from "./lesson8.component";

@NgModule({
  declarations: [
    Lesson8Component
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    Lesson8Component
  ]
})
export class Lesson8Module {
}
