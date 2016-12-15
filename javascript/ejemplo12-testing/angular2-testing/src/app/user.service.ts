import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users = ["Luis", "Alberto", "Rodrigo"];
  constructor() { }

  getUsers(): Array<string> {
    //Aqui se hace todo el trabajo sucio!!
    return this.users;
  }

}
