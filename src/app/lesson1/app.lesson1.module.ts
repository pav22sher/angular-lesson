import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import {AppLesson1Component} from "./app.lesson1.component";

@NgModule({
  bootstrap: [AppLesson1Component],
  declarations: [AppLesson1Component],
  exports: [
    AppLesson1Component
  ],
  imports: [BrowserModule, FormsModule]
})
export class AppLesson1Module { }
