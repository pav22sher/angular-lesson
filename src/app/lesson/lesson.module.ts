import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from "@angular/router";

import {LessonComponent} from "./lesson.component";

import {Lesson1Component} from "../lesson1/lesson1.component";
import {Lesson2Component} from "../lesson2/lesson2.component";
import {Lesson3Component} from "../lesson3/lesson3.component";
import {Lesson4Component} from "../lesson4/lesson4.component";
import {Lesson5Component} from "../lesson5/lesson5.component";
import {Lesson6Component} from "../lesson6/lesson6.component";
import {Lesson7Component} from "../lesson7/lesson7.component";
import {Lesson8Component} from "../lesson8/lesson8.component";
import {Lesson9Component} from "../lesson9/lesson9.component";
import {Lesson10Component} from "../lesson10/lesson10.component";
import {Lesson11Component} from "../lesson11/lesson11.component";
import {Lesson12Component} from "../lesson12/lesson12.component";
import {Lesson13Component} from "../lesson13/lesson13.component";

import {Lesson1Module} from "../lesson1/lesson1.module";
import {Lesson2Module} from "../lesson2/lesson2.module";
import {Lesson3Module} from "../lesson3/lesson3.module";
import {Lesson4Module} from "../lesson4/lesson4.module";
import {Lesson5Module} from "../lesson5/lesson5.module";
import {Lesson6Module} from "../lesson6/lesson6.module";
import {Lesson7Module} from "../lesson7/lesson7.module";
import {Lesson8Module} from "../lesson8/lesson8.module";
import {Lesson9Module} from "../lesson9/lesson9.module";
import {Lesson10Module} from "../lesson10/lesson10.module";
import {Lesson11Module} from "../lesson11/lesson11.module";
import {Lesson12Module} from "../lesson12/lesson12.module";
import {Lesson13Module} from "../lesson13/lesson13.module";

const appRoutes: Routes = [
  { path: 'lesson/lesson1', component: Lesson1Component },
  { path: 'lesson/lesson2', component: Lesson2Component },
  { path: 'lesson/lesson3', component: Lesson3Component },
  { path: 'lesson/lesson4', component: Lesson4Component },
  { path: 'lesson/lesson5', component: Lesson5Component },
  { path: 'lesson/lesson6', component: Lesson6Component },
  { path: 'lesson/lesson7', component: Lesson7Component },
  { path: 'lesson/lesson8', component: Lesson8Component },
  { path: 'lesson/lesson9', component: Lesson9Component },
  { path: 'lesson/lesson10', component: Lesson10Component },
  { path: 'lesson/lesson11', component: Lesson11Component },
  { path: 'lesson/lesson12', component: Lesson12Component },
  { path: 'lesson/lesson13', component: Lesson13Component },
]

@NgModule({
  declarations: [
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Lesson1Module,
    Lesson2Module,
    Lesson3Module,
    Lesson4Module,
    Lesson5Module,
    Lesson6Module,
    Lesson7Module,
    Lesson8Module,
    Lesson9Module,
    Lesson10Module,
    Lesson11Module,
    Lesson12Module,
    Lesson13Module,
  ],
  exports: [LessonComponent]
})
export class LessonModule {
}
