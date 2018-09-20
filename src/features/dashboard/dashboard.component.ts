import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userLoggedIn: boolean;
  items: Array<Object>;

  constructor(private userService: UserService, private router: Router) {
    this.userLoggedIn = userService.loggedIn;
    this.items = [
            {label: 'Fixed Float IRS', icon: 'fa fa-fw fa-bar-chart', routerLink: "/dashboard/pending"},
            {label: 'Float Float IRS', icon: 'fa fa-fw fa-calendar', routerLink: "/dashboard/uploaded"}
        ];
  }

  ngOnInit() {
  }

}
