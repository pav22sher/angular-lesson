import { Component } from '@angular/core'
import {Phone} from "./phone";

@Component({
  selector: 'lesson8-app',
  templateUrl: 'lesson8.component.html',
})
export class Lesson8Component{
  title: string
  price: number
  company: string
  phones: Phone[] = []
  companies: string[] = [
    'Apple',
    'Huawei',
    'Xiaomi',
    'Samsung',
    'LG',
    'Motorola',
    'Alcatel',
  ]

  addPhone(title: string, price: number, company: string) {
    this.phones.push(new Phone(title, price, company))
  }
}
