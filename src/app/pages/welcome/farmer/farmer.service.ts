import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  // api_host = 'http://localhost:3000/';
  api_host = 'https://api.srisainathtraders.com/';

  constructor(
    private http: HttpClient
  ) { }

  getFarmers(body: any) {
    const url = this.api_host + 'farmers';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }
}
