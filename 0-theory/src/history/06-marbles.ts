// import { filter, interval, map, skip, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // - === 1000ms(1s)(1frame)

// // interval(1000);
// // -0-1-2-3-4- 5- 6- 7- 8- 9-....

// // map(value => value * 2)
// // -0-2-4-6-8-10-12-14-16-18-....

// // filter(value => value % 3 === 0)
// // -0- - -6- -  -12-  -  -18-....

// // skip(2)
// // - - - - - -  -12-  -  -18-....

// // take(1)
// // - - - - - -  -12|

// interval(1000).pipe(
//     map(value => value * 2),
//     tap(value => {
//         console.log(value);
//     }),
//     filter(value => value % 3 === 0),
//     skip(2),
//     take(1),
// ).subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('COMPLETED')
//     }
// });
