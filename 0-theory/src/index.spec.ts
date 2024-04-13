import {TestScheduler} from 'rxjs/testing'
import {interval, map, of, take} from 'rxjs'

// describe('Test example', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         })
//     })

//     it('Map test', () => {

//     });
// })

describe('Test example', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })
    })

    it('Cold test', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const stream$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 12,
                    c: 20,
                }
            );
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '-a--b---c---|';
            const expectedMarblesValueMap = {
                a: 2,
                b: 24,
                c: 40,
            };

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });

    it('interval test', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const stream$ = interval(2);
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
                take(4),
            );

            const expectedMarbles = '--a-b-c-(d|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            };

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });

    it('of test', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const stream$ = of(0, 1, 2, 3);
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '(abcd|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            };

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });

    it('hot test', () => {
        testScheduler.run(({expectObservable, hot}) => {
            const stream$ = hot(
                '-a--b---c-------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                }
            );

            const resultStream$ = stream$.pipe(
                map(value => value * 3),
            );

            const subscriptionMarbles = '---^-------------!'
            const expectedMarbles = '    ----b---c-------d';
            const expectedMarblesValueMap = {
                b: 18,
                c: 30,
                d: 300,
            };

            expectObservable(resultStream$, subscriptionMarbles).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });
})