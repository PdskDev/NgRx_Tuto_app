import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { changeUsername, initAction } from './state/01-actions';

import { IState } from './state/00-reducer';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { getUser } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tutoNgRx';
  public user: Observable<User> = {} as Observable<User>;

  constructor(private store: Store<IState>) {}
  ngOnInit(): void {
    this.store.dispatch(initAction());

    //this.user = this.store.select((state: any) => state.root.user);
    //this.user = this.store.pipe(select((state: any) => state.root.user));
    //this.user = this.store.pipe(select((state: any) => state['root']['user']));
    //this.user = this.store.pipe(select((state: IState) => state.root.user));
    this.user = this.store.pipe(select(getUser));
  }

  changeUserName(): void {
    this.store.dispatch(
      changeUsername({ username: `NadetDev ${Math.random()}` })
    );
  }
}
