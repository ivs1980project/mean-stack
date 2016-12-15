import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ejemplo03-provider',
  templateUrl: './ejemplo03-provider.component.html',
  styleUrls: ['./ejemplo03-provider.component.css'],
  providers: [UserService]
})
export class Ejemplo03ProviderComponent implements OnInit {

  private users: string[];
  constructor(private service: UserService) {
    this.users = service.getUsers();
  }

  ngOnInit() {
  }

}
