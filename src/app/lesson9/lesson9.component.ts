import { Component } from '@angular/core'

export class User {
  name: string
  email: string
  phone: string
}

@Component({
  selector: 'lesson9-app',
  styleUrls: [
    'lesson9.component.css',
  ],
  templateUrl: 'lesson9.component.html',
})
export class Lesson9Component {
  users: User[] = []
  user: User = new User()
  addUser() {
    this.users.push(this.user)
    this.user = new User()
  }
}
