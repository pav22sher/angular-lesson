import {Component} from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
    <div>
      <h1>Маршрутизация в Angular</h1>
      <div>
        <ul class="nav">
          <li class="nav-item">
            <a routerLink="" class="nav-link active">Главная</a>
          </li>
          <li class="nav-item">
            <a routerLink="/lesson" class="nav-link active">Уроки</a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" class="nav-link active">О сайте</a>
          </li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
}
