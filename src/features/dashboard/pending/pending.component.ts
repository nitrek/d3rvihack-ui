import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { SelectItem } from 'primeng/primeng';
import { UsermappingService } from '../../../app/usermapping.service';
import { DashboardService } from '../dashboard.service';
import { UserService } from '../../../common/user.service';

@Component({
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

    sales: any[];
    cols: any[];
    rowGroupMetadata: any;
    url: String;
    data: any;

    constructor(private usermappingService: UsermappingService, private dashboardService: DashboardService, private userService: UserService) {
        //this.url = usermappingService.data[username];
        console.log(userService.username);
        let username = userService.username.split('dealer0')[1];
        console.log(usermappingService.data, username);
        console.log(usermappingService.data[parseInt(username)]);
        this.url = usermappingService.data[parseInt(username)];
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];

        this.cols = [
            { field: 'brand', header: 'Brand' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];
        
        this.dashboardService.getTransactions(this.url+'/get-irs-fixed-float').subscribe( res => {
            console.log(res);
            this.sales = res.map(obj => obj.state.data);
            console.log(this.sales);
              },
          error => {
            console.log(error);
          });
    }

    ngOnInit() {
        this.updateRowGroupMetaData();
        console.log(this.rowGroupMetadata);
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        // this.rowGroupMetadata = {};
        // if (this.cars) {
        //     for (let i = 0; i < this.cars.length; i++) {
        //         let rowData = this.cars[i];
        //         let brand = rowData.brand;
        //         if (i == 0) {
        //             this.rowGroupMetadata[brand] = { index: 0, size: 1 };
        //         }
        //         else {
        //             let previousRowData = this.cars[i - 1];
        //             let previousRowGroup = previousRowData.brand;
        //             if (brand === previousRowGroup)
        //                 this.rowGroupMetadata[brand].size++;
        //             else
        //                 this.rowGroupMetadata[brand] = { index: i, size: 1 };
        //         }
        //     }
        // }
        // console.log(this.rowGroupMetadata);
    }

    onRowSelect(event) {
        console.log(event);
    }

    onRowUnSelect(event) {
        console.log(event);
    }

}
