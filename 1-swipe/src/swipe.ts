import { Observable, filter, map, zip } from "rxjs";

function getXPosition(event: MouseEvent): number {
    return event.clientX;
}

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
): Observable<number> {
    return zip(
        down$.pipe(map(getXPosition)),
        up$.pipe(map(getXPosition)),
    ).pipe(
        map(([downPosition, upPosition]) => downPosition - upPosition),
        filter(diff => Math.abs(diff) > 30),
    )
}