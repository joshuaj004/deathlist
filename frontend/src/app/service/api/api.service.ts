import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  home() {
    return this.http.get(this.baseURL);
  }

  write() {

    // `${this.baseURL}write`
    // return this.http.post();
  }

  clear() {
    return this.http.get(`${this.baseURL}clear`);
  }
}
