// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessages$ = new Observable<MessageEvent>(subscriber => {
//     console.log('Start');

//     function listenerMessage({data}: MessageEvent) {
//         console.log('New data', data);

//         subscriber.next(data);
//     }

//     function listenerClose() {
//         console.log('Close');

//         subscriber.complete();
//     }

//     function listenerError(error: Event) {
//         console.log('Error');

//         subscriber.error(error);
//     }

//     ws.addEventListener('message', listenerMessage);
//     ws.addEventListener('close', listenerClose);
//     ws.addEventListener('error', listenerError);

//     return () => {
//         ws.removeEventListener('message', listenerMessage);
//         ws.removeEventListener('close', listenerClose);
//         ws.removeEventListener('error', listenerError);
//     }
// })

// wsMessages$.subscribe(data => {
//     terminalLog(`Sub 1: ${data}`);
// });

// setTimeout(() => {
//     wsMessages$.subscribe(data => {
//         terminalLog(`Sub 2: ${data}`);
//     });
// }, 4000);
