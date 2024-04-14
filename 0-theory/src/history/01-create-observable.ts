// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const sequence = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         console.log('setInterval', count);

// //         resolve(count);
// //     }, 1000);
// // })

// // sequence.then(value => terminalLog(value)); // 1

// // setInterval(() => {
// //     sequence.then(value => {
// //         terminalLog(value)
// //     });
// // }, 2000);

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         console.log('iteratorFn', count);

// //         yield count;
// //     }
// // })()

// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)
// // terminalLog(sequence.next().value)

// const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('CREATED HEART');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         if (count === 5) {
//             // subscriber.error(new Error('Max count'));
//             subscriber.complete();

//             // try {
//             //     throw new Error('Max count')
//             // } catch (error) {
//             //     subscriber.error(error);
//             // }
//         }
//     }, 1000);

//     // Destroy callback
//     return () => {
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     }
// });

// // stream$.subscribe(count => {
// //     terminalLog(count);
// // });

// const allSubsriptions = new Subscription();

// // const subscription = stream$.subscribe({
// //     next: value => {
// //         terminalLog(`First: ${value}`)
// //     },
// //     error: error => {
// //         terminalLog(`Error: ${error}`)
// //     },
// //     complete: () => {
// //         terminalLog('Completed first');
// //     },
// // });

// // allSubsriptions.add(subscription);
// allSubsriptions.add(
//     stream$.subscribe({
//         next: value => {
//             terminalLog(`First: ${value}`)
//         },
//         error: error => {
//             terminalLog(`Error: ${error}`)
//         },
//         complete: () => {
//             terminalLog('Completed first');
//         },
//     })
// );

// setTimeout(() => {
//     console.log(allSubsriptions.closed);
//     allSubsriptions.unsubscribe();
//     console.log(allSubsriptions.closed);
// }, 3000);

// // setTimeout(() => {
// //     stream$.subscribe({
// //         next: value => {
// //             terminalLog(`Second: ${value}`)
// //         }
// //     });
// // },3000)
