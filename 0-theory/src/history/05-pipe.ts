// import { MonoTypeOperatorFunction, Observable, OperatorFunction, Subscriber, Subscription, filter, from, interval, map, of, pipe, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// const stream$ = of(1,2,3,4,5,6,7,8,9);

// stream$.subscribe(console.log);

// double(
//     filterStreamByEvenNumber(stream$)
// ).subscribe(terminalLog);

// const stream$ = of(1,2,3,4,5,6,7,8,9);

// stream$.subscribe(console.log);

// map<number, number>(value => value * 2)(
//     filter<number>(value => value % 2 === 0)(stream$)
// ).subscribe(terminalLog);

// function pipe<T, U>(
//     ...operators: Array<OperatorFunction<any, any>>
// ): OperatorFunction<T, U> {
//     return (source$: Observable<T>): Observable<U> => operators.reduce(
//         (previousChildStream: Observable<any>, operator) => operator(previousChildStream),
//         source$,
//     ) as Observable<U>
// }

// pipe(
//     filter<number>(value => value % 2 === 0),
//     map<number, number>(value => value * 2),
// )(stream$).subscribe(terminalLog);

// stream$
//     .pipe(
//         filter(value => value % 2 === 0),
//         map(value => value * 2),
//     )
//     .subscribe(terminalLog);
