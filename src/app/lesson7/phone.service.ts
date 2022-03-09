import { Injectable } from '@angular/core'
import { Phone } from './phone'
import { LogService } from './log.service'

@Injectable()
export class PhoneService {
  constructor(private logService: LogService) {}

  private data: Phone[] = [
    {name: 'Apple', price: 43000},
    {name: 'Alcatel', price: 34354}
  ]

  getData(): Phone[] {
    this.logService.write('операция получения данных')
    return this.data
  }

  addData(name: string, price: number) {
    this.logService.write('операция добавления данных')
    this.data.push(new Phone(name, price))
  }
}
