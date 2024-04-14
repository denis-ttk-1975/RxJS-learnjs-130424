import { Observable, Scheduler, animationFrameScheduler, interval, map, takeWhile } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(scheduler: Scheduler = animationFrameScheduler): Observable<number> {
    // const startTime = Date.now();
    const startTime = scheduler.now();

    return interval(0, scheduler).pipe(
        // map(() => Date.now() - startTime),
        map(() => scheduler.now() - startTime),
    );
}

function duration$(allTime: number, scheduler: Scheduler = animationFrameScheduler): Observable<number> {
    return time$(scheduler).pipe(
        map(time => time / allTime),
        takeWhile(percentage => percentage <= 1),
    );
}

export function animationDownElement$(
    animationTime: number,
    diffPx: number = 100,
    scheduler: Scheduler = animationFrameScheduler,
): Observable<number> {
    return duration$(animationTime, scheduler).pipe(
        map(animationFn),
        map(percentage => percentage * diffPx),
    )
}
