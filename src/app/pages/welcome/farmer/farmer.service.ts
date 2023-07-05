import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  api_host = 'https://api.srisainathtraders.com/';

  constructor(
    private http: HttpClient
  ) { }

  getFarmers() {
    let new_headers = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
      'Access-Control-Allow-Headers': '*'
    }
    const url = this.api_host + 'farmers';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
    // return this.http.post(url, payload, {headers: new_headers});
  }
}
