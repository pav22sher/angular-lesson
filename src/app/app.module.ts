//Библиотеки устанавливаются через пакетный менеджер npm
//Имя каждой библиотеки Angular начинается с префикса @angular
import { NgModule } from '@angular/core' //Для создания модуля
import { BrowserModule } from '@angular/platform-browser' //Для работы с браузером
import { FormsModule } from '@angular/forms' //Для работы с формами

import {AppLesson1Module} from "./lesson1/app.lesson1.module";
import {AppLesson2Module} from "./lesson2/app.lesson2.module";

//Корневой компонент приложения
import { AppComponent } from './app.component'

//Декоратор @NgModule с методанными
@NgModule({
  //корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent],
  //классы представлений, которые принадлежат модулю
  declarations: [AppComponent],
  //классы которые необходимы для представлений текущего модуля
  imports: [BrowserModule, FormsModule, AppLesson1Module, AppLesson2Module],
  exports: [],
  providers: []
})
export class AppModule { }
