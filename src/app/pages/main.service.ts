import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  api_host = 'https://api.srisainathtraders.com/';

  constructor(
    private http: HttpClient
  ) { }

  login(body: any) {
    let new_headers = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
      'Access-Control-Allow-Headers': '*'
    }
    const url = this.api_host + 'login';
    return this.http.post(url, body);
    // return this.http.post(url, body, {headers: new_headers});
  }

  getCustomers() {
    let new_headers = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
      'Access-Control-Allow-Headers': '*'
    }
    const url = this.api_host + 'customers';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
  }

  getVegetables() {
    let new_headers = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
      'Access-Control-Allow-Headers': '*'
    }
    const url = this.api_host + 'vegetables';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
  }
}
