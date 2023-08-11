import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]) : ValidatorFn {

    const domainStrings = domains.join("|");
    const regExp = new RegExp(`[^@]{4,}@abv\.(${domainStrings})$`);

    return (control) => {

        return control.value === "" || regExp.test(control.value)
        ?  null : { appEmailValidator: true};
    }
}