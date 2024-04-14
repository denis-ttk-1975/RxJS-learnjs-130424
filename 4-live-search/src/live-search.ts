import { EMPTY, OperatorFunction, catchError, debounceTime, distinctUntilChanged, filter, map, pipe, retry, switchMap, timer } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreator: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(searchParams => !searchParams || searchParams.length >= 3),
        map<string, AjaxConfig>(searchParam => ({
            ...requestConfig,
            url: urlCreator(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                // delay: 1000
                delay: (error, retryCount) => timer(retryCount * 1000)
            }),
            catchError(() => EMPTY),
        )),
    );
}