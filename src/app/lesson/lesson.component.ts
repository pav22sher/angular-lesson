import { Component } from '@angular/core';

@Component({
  selector: 'lesson-app',
  template: `
    <div>
      <h1>Простые уроки по Angular</h1>
      <div>
        <ul class="nav">
          <li class="nav-item">
            <a routerLink="/lesson/lesson1" class="nav-link active">Урок 1</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson2" class="nav-link active">Урок 2</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson3" class="nav-link active">Урок 3</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson4" class="nav-link active">Урок 4</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson5" class="nav-link active">Урок 5</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson6" class="nav-link active">Урок 6</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson7" class="nav-link active">Урок 7</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson8" class="nav-link active">Урок 8</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson9" class="nav-link active">Урок 9</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson10" class="nav-link active">Урок 10</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson11" class="nav-link active">Урок 11</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson12" class="nav-link active">Урок 12</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson/lesson13" class="nav-link active">Урок 13</a>
          </li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class LessonComponent {
}
