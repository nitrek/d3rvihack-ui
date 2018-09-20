import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userLoggedIn: boolean;
  @Output() logout = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  userLogout() {
    this.logout.emit();
  }

}
