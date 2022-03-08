import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

//Корневой компонент приложения
import {AppLesson2Component} from "./app.lesson2.component";

//Декоратор @NgModule с методанными
@NgModule({
  bootstrap: [AppLesson2Component],
  declarations: [AppLesson2Component],
  exports: [
    AppLesson2Component
  ],
  imports: [BrowserModule, FormsModule]
})
export class AppLesson2Module { }
