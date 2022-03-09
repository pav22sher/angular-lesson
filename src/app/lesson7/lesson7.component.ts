import { Component, OnInit } from '@angular/core'
import { Phone } from './phone'
import { PhoneService } from './phone.service'
import {LogService} from "./log.service";

//Сервисы
@Component({
  selector: 'lesson7-app',
  template: `
    <div class="panel">
      <div class="form-inline">
        <div class="form-group">
          <div class="col-md-8">
            <input
              class="form-control"
              [(ngModel)]="name"
              placeholder="Модель"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6">
            <input
              type="number"
              class="form-control"
              [(ngModel)]="price"
              placeholder="Цена"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-8">
            <button
              class="btn btn-default"
              (click)="addItem(name, price)"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Модель</th>
          <th>Цена</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of items">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  providers: [PhoneService, LogService],
})
export class Lesson7Component implements OnInit {
  name: string
  price: number
  items: Phone[] = []
  constructor(private phoneService: PhoneService) {}

  addItem(name: string, price: number) {
    this.phoneService.addData(name, price)
    this.name = undefined
    this.price = undefined
  }
  ngOnInit() {
    this.items = this.phoneService.getData()
  }
}
