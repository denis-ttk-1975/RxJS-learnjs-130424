// import { Observable, OperatorFunction, Subscription, exhaustMap, filter, interval, map, mergeAll, mergeMap, of, skip, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const stream$ = interval(1000).pipe(
// //     // map(value => of(value)), // Observable<Observable<number>>
// //     // mergeAll(), // Observable<number>
// //     mergeMap(value => of(value)) // map + mergeAll
// // );

// const stream$ = interval(8000);

// const getNestedStream$ = (_value: unknown) => interval(2000);

// stream$.pipe(
//     mergeMap(value => getNestedStream$(value))
// ).subscribe();

// --------0--------1--------2--------3--------4---

// --------0
//          --------1
//                   --------2
//                            --------3
//                                     --------4---

/**
 * mergeMap
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e--f--g--h--k--l--m--n--o-
 *          --------1
 *               1: --a--b--c--d--e--f--g--h--k--l-
 *                   --------2
 *                        2: --a--b--c--d--e--f--g-
 *                            --------3
 *                                 3: --a--b--c--d-
 *                                     --------4---
 *                                          4: --a-
 */

/**
 * mergeMap + take(2)
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b|
 *          --------1
 *               1: --a--b|
 *                   --------2
 *                        2: --a--b|
 *                            --------3
 *                                 3: --a--b--c--d-
 *                                     --------4---
 *                                          4: --a-
 *         --a--b-- -- -- -- -- -- -- --l--m--n--o-
 *                    a  b      
 *                             a  b
 */


/**
 * mergeMap with concurent 2 (mergeMap(() => ..., 2))
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e--f--g--h--k--l--m--n--o-
 *          --------1
 *               1: --a--b--c--d--e--f--g--h--k--l-
 *                   --------2
 *                        2: 
 *                            --------3
 *                                 3: 
 *                                     --------4---
 *                                          4: 
 *         --a--b--c--d--e--f--g--h--k--l--m--n--o-
 *                    a  b  c  d
 */

/**
 * mergeMap with concurent 2 and take(8)
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e--f--g--h|
 *          --------1
 *               1: --a--b--c--d--e--f--g--h|
 *                   --------2
 *                        2:       --a--b--c--d--e--
 *                            --------3
 *                                 3:       --a--b--
 *                                     --------4---
 *                                          4: 
 */

// function mergeMap<T>(cb: (value: T) => Observable<unknown>): OperatorFunction<T, unknown> {
//     return (source$: Observable<T>) => new Observable<unknown>(subscriber => {
//         const allSubscription = new Subscription();

//         const sourceSubscription = source$.subscribe({
//             next: value => {
//                 const nestedStream$ = cb(value);

//                 allSubscription.add(
//                     nestedStream$.subscribe({
//                         next: v => {
//                             subscriber.next(v)
//                         }
//                     })
//                 )
//             }
//         })

//         return () => {
//             sourceSubscription.unsubscribe();
//             allSubscription.unsubscribe();
//         }
//     });
// }

/**
 * concatMap aka mergeMap with concurent 1
 * 
 * take(5)
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e|
 *          --------1
 *               1:       --a--b--c--d--e|
 *                   --------2
 *                        2:             --a--b--c-
 *                            --------3
 *                                     --------4---
 */

/**
 * switchMap
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c
 *          --------1
 *               1: --a--b--c
 *                   --------2
 *                        2: --a--b--c
 *                            --------3
 *                                 3: --a--b--c
 *                                     --------4---
 *                                          4: --a-
 */

/**
 * exaustMap
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e--f--g--h--k--l--m--n--o-
 *          --------1
 *               1: 
 *                   --------2
 *                        2: 
 *                            --------3
 *                                 3: 
 *                                     --------4---
 *                                          4: 
 */

/**
 * exhaustMap + take 8
 * 
 * --------0--------1--------2--------3--------4---
 * 
 * --------0
 *      0: --a--b--c--d--e--f--g--h|
 *          --------1
 *               1: 
 *                   --------2
 *                        2: 
 *                            --------3
 *                                 3: --a--b--c--d--e-
 *                                     --------4---
 *                                          4: 
 */
