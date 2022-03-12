import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Lesson13Component} from "./lesson13.component";

@NgModule({
  declarations: [
    Lesson13Component
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    Lesson13Component
  ]
})
export class Lesson13Module {
}
