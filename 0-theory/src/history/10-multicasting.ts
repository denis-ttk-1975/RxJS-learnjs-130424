// import { ReplaySubject, interval, share } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000).pipe(
//     share({
//         connector: () => new ReplaySubject(1),
//         // resetOnComplete,
//         // resetOnError,
//         // resetOnRefCountZero,
//     }),
// );

// stream$.subscribe(value => {
//     terminalLog(`S1: ${value}`)
// })

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`S2: ${value}`)
//     })
// }, 3000)
