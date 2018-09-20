import { Injectable } from '@angular/core';

@Injectable()
export class UsermappingService {

  constructor() { }
  
  public data: any = {
    1: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10007/api/obligation",
    2: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10010/api/obligation"
    3: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10013/api/obligation"
    11: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10016/api/obligation"
    12: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10019/api/obligation"
    13: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10022/api/obligation"
    14: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10025/api/obligation"
    15: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10028/api/obligation"
    21: "http://ec2-13-228-207-43.ap-southeast-1.compute.amazonaws.com:10031/api/obligation"
  };

}
