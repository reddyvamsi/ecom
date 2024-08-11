import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  incrementAction,
  decrementAction,
  resetAction,
} from 'src/ngrx-store/ecom.action';

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy-component.component.html',
  styleUrls: ['./dummy-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyComponentComponent implements OnInit {
  count = 0;
  countObservable$: Observable<number> | undefined;
  constructor(public store: Store<{ counterSelector: number }>) {
    this.countObservable$ = this.store.select('counterSelector');
  }

  ngOnInit(): void {}

  incrementCount() {
    this.countObservable$?.pipe().subscribe((value) => {
      this.count = value;
    });
    this.store.dispatch(incrementAction());
  }

  decrementCount() {
    this.store.dispatch(decrementAction());
  }

  resetCount() {
    this.store.dispatch(resetAction());
  }
}
