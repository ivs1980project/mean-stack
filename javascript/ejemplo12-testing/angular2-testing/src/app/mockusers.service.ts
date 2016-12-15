import { Injectable } from '@angular/core';

@Injectable()
export class MockusersService {

  constructor() { }

  getUsers(): Array<string> {
    return ["tu", "y yo"];
  }

}
