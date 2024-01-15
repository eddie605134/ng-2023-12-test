import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface List {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<List[]>(this.url);
  }
}
