// import { EMPTY, NEVER, Observable, catchError, of, retry, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const streamWithError$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error('Error!');
//     subscriber.next(1000);
// });

// streamWithError$
// .pipe(
//     tap({
//         next: value => {
//             terminalLog(`Tap: ${value}`)
//         },
//         error: error => {
//             terminalLog(`Tap: ${error}`)
//         },
//     }),
//     // catchError(error => of(null))
//     // catchError(error => of(0, 1,2,3,4))
//     // catchError(error => EMPTY) // |
//     // catchError(error => NEVER) // ----------------------------------------------------------------...
//     // catchError(() => throwError(() => new Error('Alarm'))),
//     // catchError((error, stream$) => stream$)
//     retry({
//         count: 3,
//         // delay: 1000
//         delay: (error, retryCount) => timer(retryCount * 1000)
//     }),
// )
// .subscribe({
//     next: terminalLog,
//     error: terminalLog,
//     complete: () => {
//         terminalLog('completed');
//     }
// });
