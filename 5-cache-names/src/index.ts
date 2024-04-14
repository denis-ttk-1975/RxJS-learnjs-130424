import 'bootstrap';
import '../../assets/css/style.css';
import { FormComponent } from './form/form.component';

const formMain = document.querySelector('.first-form') as HTMLElement;
const formSecond = document.querySelector('.second-form') as HTMLElement;

formSecond.hidden = true;

new FormComponent(formMain);

setTimeout(() => {
    // create second form
    new FormComponent(formSecond);
    
    formSecond.hidden = false;
}, 10000)