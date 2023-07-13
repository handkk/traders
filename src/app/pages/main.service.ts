import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // api_host = 'http://localhost:3000/';
  api_host = 'https://api.srisainathtraders.com/';

  constructor(
    private http: HttpClient
  ) { }

  login(body: any) {
    const url = this.api_host + 'login';
    return this.http.post(url, body);
  }

  logout(body: any) {
    const url = this.api_host + 'logout';
    return this.http.post(url, body);
  }

  getCustomers() {
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
    const url = this.api_host + 'vegetables';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
  }

  addVegetable(body: any) {
    const url = this.api_host + 'vegetable';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeVegetable(id: string) {
    const url = this.api_host + 'vegetable/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  updateVegetable(id: string, body: any) {
    const url = this.api_host + 'vegetable/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.put(url, body);
  }

  createFarmer(body: any) {
    const url = this.api_host + 'farmer';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeFarmer(id: string) {
    const url = this.api_host + 'farmer/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  updateFarmer(id: string, body: any) {
    const url = this.api_host + 'farmer/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.put(url, body);
  }

  createCustomer(body: any) {
    const url = this.api_host + 'customer';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeCustomer(id: string) {
    const url = this.api_host + 'customer/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  updateCustomer(id: string, body: any) {
    const url = this.api_host + 'customer/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.put(url, body);
  }

  getBills() {
    const url = this.api_host + 'bills';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
  }

  createBill(body: any) {
    const url = this.api_host + 'new-bill';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeBill(id: string) {
    const url = this.api_host + 'bill/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  getCollections() {
    const url = this.api_host + 'collections';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.post(url, payload);
  }

  createCollection(body: any) {
    const url = this.api_host + 'new-collection';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }
}
