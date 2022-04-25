import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  dataUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  getData() {
    return this.http.get<any>(this.dataUrl);
  }
}
