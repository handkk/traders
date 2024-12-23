import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // api_host = '/';
  api_host = 'http://localhost:3000/';
  spinning = new EventEmitter();
  secretKey: string = 'traders';

  constructor(
    private http: HttpClient
  ) { }

  getLoggedInUser(): any {
    const user: any = sessionStorage.getItem('userinfo');
    return JSON.parse(user);
  }

  login(body: any) {
    const url = this.api_host + 'login';
    return this.http.post(url, body);
  }

  resetpassword(body: any) {
    const url = this.api_host + 'reset_password';
    return this.http.post(url, body);
  }

  logout(body: any) {
    const url = this.api_host + 'logout';
    return this.http.post(url, body);
  }

  getCustomers(body: any) {
    const url = this.api_host + 'customers';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  getVegetables(body: any) {
    const url = this.api_host + 'vegetables';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
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

  getBills(body: any) {
    const url = this.api_host + 'bills';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
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

  getCollections(body: any) {
    const url = this.api_host + 'collections';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  createCollection(body: any) {
    const url = this.api_host + 'new-collection';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeCollection(id: string) {
    const url = this.api_host + 'collection/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  getAllUsers() {
    const url = this.api_host + 'allusers';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    const payload = {
      userId: userinfo.userId,
      sessionId: userinfo.sessionId
    };
    return this.http.get(url);
  }

  createUser(body: any) {
    const url = this.api_host + 'create_user';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  removeUser(id: string) {
    const url = this.api_host + 'remove_user/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let requestBody: any = {};
    requestBody['userId'] = userinfo.userId;
    requestBody['sessionId'] = userinfo.sessionId;
    return this.http.delete(url, { body: requestBody });
  }

  updateUser(id: string, body: any) {
    const url = this.api_host + 'update_user/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.put(url, body);
  }

  getCurrentUser() {
    let userinfo: any = sessionStorage.getItem('userinfo');
    if (!userinfo) {
      return null;
    } else {
      const user = JSON.parse(userinfo);
      return user;
    }
  }

  updateBill(id: string, body: any) {
    const url = this.api_host + 'update-bill/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.put(url, body);
  }

  getDayBills(body: any) {
    const url = this.api_host + 'day_bills';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  getStatement(body: any) {
    const url = this.api_host + 'statement';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  printCustomerBills(body: any) {
    const url = this.api_host + 'customer_bills';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  getCollectionsByCustomerId(id: string) {
    const url = this.api_host + 'customer-collections/' + id;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    let body: any = {};
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    body['customer_id'] = id;
    return this.http.post(url, body)
      .pipe(
        map((data: any) => {
          let lastcollection: any[] = [];
          if(data.length&&data.length>0){
            lastcollection.push(data[0]);
            if(data.length>2||data.length==2){
              lastcollection.push(data[1]);
            }
          }else{
            lastcollection.push([])
          }
          
          return lastcollection;
        })
      )
  }

  encrypt(value: string): string {
    return crypto.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt: string) {
    return crypto.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(crypto.enc.Utf8);
  }

  updateUserPermissions(body: any) {
    const url = this.api_host + 'update_permissions';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  getFarmerBills(body: any) {
    const url = this.api_host + 'farmer/bills';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  createCollectionReport(body: any) {
    const url = this.api_host + 'collection_report';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    body['created_by'] = userinfo.username;
    return this.http.post(url, body);
  }

  getcollection_reports(body: any) {
    const url = this.api_host + 'collection_reports';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }

  getCollectionAmountByUser(body: any) {
    const url = this.api_host + 'getCollectionAmountByUser';
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    body['userId'] = userinfo.userId;
    body['sessionId'] = userinfo.sessionId;
    return this.http.post(url, body);
  }
}
