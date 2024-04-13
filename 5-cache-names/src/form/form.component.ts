import { combineLatest, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";

export class FormComponent {
    private readonly inputElement: HTMLInputElement;
    private readonly buttonElement: HTMLButtonElement;

    constructor(formContainer: HTMLElement) {
        const inputElement = formContainer.querySelector('input');
        const buttonElement = formContainer.querySelector('button');

        if (!inputElement || ! buttonElement) {
            throw new Error('Форма не имеет необходимых элементов');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenValidate()
    }

    private listenValidate() {
        const inputValue$ = fromEvent(this.inputElement, 'input').pipe(
            map(({target}) => (target as HTMLInputElement).value),
            startWith(this.inputElement.value),
        );

        combineLatest([
            inputValue$,
            userService.uniqueNameSequence$
        ])
            // .pipe()
            .subscribe(([inputValue, names]) => {
                const isValid = inputValue && names.includes(inputValue);

                this.buttonElement.disabled = !isValid;
            });
    }
}