import { Component, OnInit } from '@angular/core';
import { changeUsername, initAction } from './state/01-actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tutoNgRx';

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(initAction());
  }

  changeUserName(): void {
    this.store.dispatch(
      changeUsername({ username: `NadetDev ${Math.random()}` })
    );
  }
}
