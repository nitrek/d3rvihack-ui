import { Component, OnInit } from '@angular/core';
import { UsermappingService } from '../../../app/usermapping.service';
import { DashboardService } from '../dashboard.service';
import { UserService } from '../../../common/user.service';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.css']
})
export class UploadedComponent implements OnInit {

  url: String;
    sales: any;
    
  constructor(private usermappingService: UsermappingService, private dashboardService: DashboardService, private userService: UserService) {
    
    let username = userService.username.split('dealer0')[1];
        console.log(usermappingService.data, username);
        console.log(usermappingService.data[parseInt(username)]);
        this.url = usermappingService.data[parseInt(username)];
        
        this.dashboardService.getTransactions(this.url+'/get-irs-float-float').subscribe( res => {
            console.log(res);
            this.sales = res.map(obj => obj.state.data);
            console.log(this.sales);
              },
          error => {
            console.log(error);
          });
  }

  ngOnInit() {
  }

}
