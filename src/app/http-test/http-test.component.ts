import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

export interface List {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-http-test',
  standalone: true,
  imports: [],
  templateUrl: './http-test.component.html',
  styleUrl: './http-test.component.scss'
})
export class HttpTestComponent implements OnInit {
  posts!: List[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
