import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = new BehaviorSubject(sessionStorage.getItem("token"));
  currentToken = this.token.asObservable();
  changeToken(at: string) { this.token.next(at);sessionStorage.setItem("token",at); }

  getSavedToken(){
    let t;
    this.currentToken.subscribe(m => t=m);
    return t;
  }

  url = 'http://api.kadbyte.com/api/';
  constructor(private http: HttpClient) { }

  public signUp(data){
    return this.http.post(`${this.url}account/create`,data);
  }
  public login(data){
    return this.http.post(`${this.url}account/login`,data);
  }
  public getToken(token){
    return this.http.get(`${this.url}account/exchange?token=${token}`);
  }
  public addItem(data){
    return this.http.post(`${this.url}item/`,data,this.getSavedToken());
  }
  public uploadImage(data){
    return this.http.post(`${this.url}item/image/upload`,data,this.getSavedToken());
  }
}
