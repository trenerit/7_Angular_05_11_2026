import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {


  tabUsers = [
    {id: 1, name: 'Nowak Jan', login: 'jnowak', age: 27},
    {id: 2, name: 'Nowak Anna', login: 'anowak', age: 30},
    {id: 3, name: 'Kowalski Marian', login: 'mkowalski', age: 40},
    {id: 4, name: 'Kowalska Anita', login: 'akowalska', age: 25}
  ];


}
