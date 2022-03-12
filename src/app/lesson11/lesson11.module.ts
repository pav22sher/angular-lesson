import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Lesson11Component} from "./lesson11.component";

@NgModule({
  declarations: [
    Lesson11Component
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    Lesson11Component
  ]
})
export class Lesson11Module {
}
