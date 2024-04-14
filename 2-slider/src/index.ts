import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { createSlider$ } from './slider';

const buttonElement = document.getElementById('send-result') as HTMLElement;

const quality$ = createSlider$('quality');
const rating$ = createSlider$('rating');
const actual$ = createSlider$('actual');

combineLatest([
    quality$,
    rating$,
    actual$,
]).pipe(
    map(([quality, rating, actual]) => (quality + rating + actual) / 3)
).subscribe(console.log);

fromEvent(buttonElement, 'click').pipe(
    withLatestFrom(
        quality$,
        rating$,
        actual$,
    ),
    map(([_clickEvent, quality, rating, actual]) => (quality + rating + actual) / 3)
).subscribe(terminalLog);
