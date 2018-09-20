import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/user.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoggedIn: boolean;
  showPassword: boolean = false;
  loginForm: FormGroup;
  passwordType: String = 'password';

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
	this.userLoggedIn = userService.loggedIn;
	this.loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
	});
  }

  login() {
console.log('scs');
	this.userService.loggedIn = true;
	this.router.navigate(['/dashboard/pending']);
	this.userService.username = this.loginForm.value.username;
  }

  ngOnInit() {
  }

}
