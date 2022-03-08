//Библиотеки устанавливаются через пакетный менеджер npm
//Имя каждой библиотеки Angular начинается с префикса @angular
import { NgModule } from '@angular/core' //Для создания модуля
import { BrowserModule } from '@angular/platform-browser' //Для работы с браузером
import { FormsModule } from '@angular/forms' //Для работы с формами

//Компоненты
import { AppComponent } from './app.component' //Корневой компонент приложения
import {Lesson1Component} from "./lesson1/lesson1.component";
import {Lesson2Component} from "./lesson2/lesson2.component";
import {Lesson3Component1} from "./lesson3/lesson3.component1";
import {Lesson3Component2} from "./lesson3/lesson3.component2";

//Декоратор @NgModule с методанными
@NgModule({
  //корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent],
  //классы представлений, которые принадлежат модулю
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component1,
    Lesson3Component2
  ],
  //классы которые необходимы для представлений текущего модуля
  imports: [BrowserModule, FormsModule],
  exports: [],
  providers: []
})
export class AppModule { }
