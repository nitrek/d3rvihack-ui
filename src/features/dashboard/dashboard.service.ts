import { Injectable } from '@angular/core';
 import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }
  
 

    getTransactions(url): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
                    .map(function(res) {
                      return res.json() || {};
                    })
                    .catch(function(err) {
                      return Observable.throw(err.message || err);
                    });
      }

}
