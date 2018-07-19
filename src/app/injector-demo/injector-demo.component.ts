import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-injector-demo',
  templateUrl: './injector-demo.component.html',
  styleUrls: ['./injector-demo.component.css']
})
export class InjectorDemoComponent implements OnInit {

  userName: string;

  constructor(private userService: UserService){}

  signIn(): void {
    this.userService.setUser({
      name: 'Jack'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }


  ngOnInit() {
  }

}
