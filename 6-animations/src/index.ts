import { asapScheduler, asyncScheduler } from 'rxjs';
import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDownElement$(10000, 100).subscribe(elementDiffPosition => {
    shapeElement.style.transform = `translateY(${elementDiffPosition}px)`;
});
