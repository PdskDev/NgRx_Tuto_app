import { Component, OnInit } from '@angular/core';
import { changeUsername, initAction } from './state/01-actions';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tutoNgRx';
  public user: Observable<any> = {} as Observable<any>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(initAction());

    this.user = this.store.select((state: any) => state.root.user);
  }

  changeUserName(): void {
    this.store.dispatch(
      changeUsername({ username: `NadetDev ${Math.random()}` })
    );
  }
}
