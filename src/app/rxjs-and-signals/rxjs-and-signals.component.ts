import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, Subscription, of, from, fromEvent, interval, timer } from 'rxjs';
import { map, filter, tap, catchError, take } from 'rxjs/operators';

import { PostService } from '../services/post.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-rxjs-and-signals',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    ButtonComponent,
  ],
  templateUrl: './rxjs-and-signals.component.html',
  styleUrl: './rxjs-and-signals.component.scss'
})
export class RxjsAndSignalsComponent implements OnInit, OnDestroy {
  posts$!: Observable<any[]>;
  subscription?: Subscription;
  loading = false;
  error?: string;

  testFrom$!: Observable<any>;
  sources$!: Observable<any>;
  buttonClicks$!: Observable<any>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loading = true;
    this.posts$ = this.postService.getPosts().pipe(
      take(1),
      map(posts => posts
        .slice(0, 5)
        .filter((post) =>
          post.title.includes('sunt'))), // 取前 15 筆資料
      // map(posts => posts.map(post => ({ ...post, title: post.title + '123' }))),
      // filter(posts => posts.some(post => post.title.includes('su46516nt'))),
      tap(() => this.loading = false), // 當數據開始流動時，設置加載為 false
      catchError(err => {
        this.error = err.message;
        this.loading = false;
        return EMPTY; // 在發生錯誤時返回空的 Observable
      })
    );
    // this.posts$ = this.postService.getPosts().pipe(
    //   take(15), // 只取流中的前 15 次發射的值
    //   // ...其他操作符
    // );

    const testFrom = [1, 2, 3, 4]
    this.testFrom$ = from(testFrom)
    this.testFrom$.subscribe(value => console.log(value))
    this.sources$ = timer(2000)

    // 獲取按鈕元素
    const button = document.getElementById('rx-button') as HTMLButtonElement;

    // 創建一個 Observable 來監聽點擊事件
    this.buttonClicks$ = fromEvent(button, 'click');

    // 訂閱這個 Observable 來處理點擊事件
    this.buttonClicks$.subscribe(() => {
      this.testRx()
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  testRx() {
    console.log('Material 按鈕被點擊了！')
  }
}
