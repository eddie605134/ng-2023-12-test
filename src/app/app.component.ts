import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Button {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule, // Angular Material 需要動畫模組
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular17 Test';

  navItems = [
    { link: '/first-component', label: 'First Component' },
    { link: '/second-component', label: 'Second Component' },
    { link: '/event-bilding', label: 'Event-Bilding' },
    { link: '/http-test', label: 'HTTP Test' },
    { link: '/forms', label: 'Forms' },
    { link: '/rxjs-and-signals', label: 'rxjs and signals' }
  ];
}
