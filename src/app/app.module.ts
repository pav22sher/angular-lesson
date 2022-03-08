import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppLesson1Component } from './lesson1/app.lesson1.component'
import { AppLesson2Component } from './lesson2/app.lesson2.component'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppLesson1Component, AppLesson2Component],
  bootstrap: [AppLesson1Component, AppLesson2Component],
})
export class AppModule { }
