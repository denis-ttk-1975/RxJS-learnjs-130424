// import { Observable, Subscriber, Subscription, from, interval, of, timer } from 'rxjs';';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // interval(1000);
// // timer(4000)

// // of(1, 2, [3,4], {count: 5}).subscribe(console.log);
// // from([1, 2, [3,4], {count: 5}]).subscribe(console.log);

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (count < 50) {
// //         count += 1;

// //         console.log('iteratorFn', count);

// //         yield count;
// //     }

// //     return
// // })()

// // from(sequence).subscribe(terminalLog);

// // from(
// //     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=37pr9z').then(res => res.json())
// // ).subscribe(console.log);

// ajax({
//     url: 'https://learn.javascript.ru/courses/groups/api/participants?key=37pr9z',
//     crossDomain: true,
//     method: 'GET',
// }).subscribe(console.log);
// // 