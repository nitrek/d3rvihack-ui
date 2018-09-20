import { Component } from '@angular/core';
import { UserService } from '../common/user.service';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dvps';
  private userLoggedIn: boolean;

  /*items: Array<Object> = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit', "routerLink": "/reports/79"}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];*/
    items = [
		{
			label: 'Dashboard',
			routerLink: "/dashboard/pending"
		}
	];
  
  constructor(private userService: UserService, private router: Router) {
	this.userLoggedIn = userService.loggedIn;
	
	router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
console.log(userService.loggedIn);
		this.userLoggedIn = userService.loggedIn;
        }
        // NavigationEnd
    	  // NavigationCancel
    	  // NavigationError
       // RoutesRecognized
  	});
  }

  logout() {
	this.userService.loggedIn = false;
	this.router.navigate(['/login']);
  }

}
