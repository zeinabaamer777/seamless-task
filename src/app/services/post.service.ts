import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  alternativeUrl = 'https://jsonplaceholder.typicode.com/post'; //works
  baseUrl = 'https://example.com/api/subscrib'; // doesn't

  constructor(private HttpClient:HttpClient) { }
  Register(model: any) {
    return this.HttpClient.post(this.baseUrl , model);
  }
}
