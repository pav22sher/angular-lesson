import {Component} from '@angular/core';

//Директива ngIf, ngFor, ngSwitch
@Component({
  selector: 'lesson6-app',
  template: `
    <div *ngIf="condition; then thenBlock else elseBlock"></div>
    <ng-template #thenBlock>Then template</ng-template>
    <ng-template #elseBlock>Else template</ng-template>
    <button (click)="toggle()">Toggle</button>

    <div>
      <p *ngFor="let item of items">{{item}}</p>
    </div>

    <div [ngSwitch]="count">
      <ng-template *ngSwitchCase="1">
        {{count * 10}}
      </ng-template>
      <ng-template *ngSwitchCase="2">
        {{count * 100}}
      </ng-template>
      <ng-template *ngSwitchDefault>
        {{count * 1000}}
      </ng-template>
    </div>
    `,
})
export class Lesson6Component {
  condition: boolean = true
  toggle() {
    this.condition = !this.condition
  }

  items = [
    'Apple',
    'Huawei',
    'Samsung'
  ]

  count: number = 5
}
