import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Lesson12Component} from "./lesson12.component";

@NgModule({
  declarations: [
    Lesson12Component
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    Lesson12Component
  ]
})
export class Lesson12Module {
}
