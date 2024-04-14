// import { asapScheduler, asyncScheduler, from, interval, observeOn, of, scheduled, subscribeOn, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // from(Array.from({length: 10}, (_, index) => index)).subscribe(terminalLog);
// // from({length: 10}).subscribe(terminalLog);
// // interval(0).subscribe(terminalLog);
// // from(Array.from({length: 10}, (_, index) => index), asyncScheduler).subscribe(terminalLog);

// // scheduled(Array.from({length: 10}, (_, index) => index), asyncScheduler).subscribe(terminalLog)

// // terminalLog('Test');

// // from(Array.from({length: 10}, (_, index) => index))
// //     .pipe(
// //         tap(() => {
// //             console.log('default scheduler');
// //         }),
// //         subscribeOn(asapScheduler),
// //         observeOn(asyncScheduler),
// //         tap(() => {
// //             console.log('before async scheduler');
// //         }),
// //     )
// //     .subscribe(console.log);

// // console.log('Test');

// // of(1,2,3).subscribe(value => {
// //     console.log(`sync - ${value}`);
// // })
