import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string = "http://localhost:5000/";
  private requestOptions = {

  };

  constructor(private http: HttpClient) { }

  home() {
    return this.http.get(this.baseURL);
  }

  write(payload) {
    const requestOptions = Object.assign({}, this.requestOptions);
    requestOptions["body"] = {
      data: payload
    };
    // requestOptions["headers"] = {

    // };
    return this.http.post(`${this.baseURL}write`, requestOptions);
  }

  clear() {
    return this.http.get(`${this.baseURL}clear`);
  }
}
