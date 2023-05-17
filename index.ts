import './style.css';

import {
  of,
  map,
  fromEvent,
  scan,
  count,
  Observable,
  Subscriber,
  from,
} from 'rxjs';

// ************ RxJs subscribe ************

fromEvent(document, 'click').subscribe(() => console.log('click'));

// RxJs Pipe
fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => {
    console.log(count);
  });

// ************ Observable in RxJs ************

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 2000);
});

console.log("Hey I'm here");

const mySubscriber = observable.subscribe({
  next(x: any) {
    console.log(`X is => ${x}`);
  },
  error(err: any) {
    console.log(`error  is => ${err}`);
  },
  complete() {
    console.log(`It'a all Done => `);
  },
});

mySubscriber.unsubscribe();

const varIs = from([1, 2, 4, 8]);
const subscription = varIs.subscribe((x) => console.log(`subs val is => ${x}`));

subscription.unsubscribe();
