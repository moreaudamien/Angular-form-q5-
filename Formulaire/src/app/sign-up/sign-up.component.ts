import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
model : User = new User("","","","" );
constructor() {}
onSubmit(): void {

  console.log(this.model);
}
}
export class User {
  constructor(
  public firstName: string,
  public lastName: string,
  public email: string,
  public password: string,
  ){}
}
