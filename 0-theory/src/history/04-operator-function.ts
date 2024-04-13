// import { MonoTypeOperatorFunction, Observable, OperatorFunction, Subscriber, Subscription, filter, from, interval, map, of, pipe, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// function filterStreamValue<T>(cb: (value: T) => boolean): OperatorFunction<T, T> {
// function filterStreamValue<T>(cb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
//     return (source$: Observable<T>) => new Observable<T>(subscriber => {
//         return source$.subscribe({
//             next: value => {
//                 if (cb(value)) {
//                     subscriber.next(value);
//                 }
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//             error: error => {
//                 subscriber.error(error);
//             }
//         });

//         // return () => {
//         //     subscription.unsubscribe();
//         // }
//         // return {
//         //     unsubscribe: () => {
//         //         subscription.unsubscribe();
//         //     }
//         // }

//         // return subscription;
//     })
// }

// function filterStreamValue<T>(cb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
//     return (source$: Observable<T>) => new Observable<T>(
//         subscriber => source$.subscribe({
//             next: value => {
//                 if (cb(value)) {
//                     subscriber.next(value);
//                 }
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//             error: error => {
//                 subscriber.error(error);
//             }
//         }),
//     )
// }

// const filterStreamByEvenNumber = filterStreamValue<number>(value => value % 2 === 0);
// const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0);

// const stream$ = of(1,2,3,4,5,6,7,8,9);

// stream$.subscribe(console.log);

// filterStreamByEvenNumber(stream$).subscribe(terminalLog);

// function stub(): OperatorFunction<unknown, string> {
//     return (_source$: Observable<unknown>) => new Observable(subscriber => {
//         subscriber.next('Stub');
//         subscriber.complete();
//     });
// }
