//Библиотеки устанавливаются через пакетный менеджер npm
//Имя каждой библиотеки Angular начинается с префикса @angular
import {NgModule} from '@angular/core' //Для создания модуля
import {BrowserModule} from '@angular/platform-browser' //Для работы с браузером
import {FormsModule} from '@angular/forms' //Для работы с формами
import {RouterModule, Routes} from "@angular/router";
//Друнгие модули
import {LessonModule} from "./lesson/lesson.module";

//Компоненты
import {AppComponent} from './app.component' //Корневой компонент приложения
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {LessonComponent} from "./lesson/lesson.component";
import {NotFoundComponent} from "./not-found.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'lesson', component: LessonComponent },
  { path: '**', component: NotFoundComponent },
]

//Декоратор @NgModule с методанными
@NgModule({
  //корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent],
  //классы представлений, которые принадлежат модулю
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  //классы которые необходимы для представлений текущего модуля
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LessonModule,
  ]
})
export class AppModule {
}
