import { NgModule } from "@angular/core";
import { AppEmailDirective } from "./validators/app-email.directive";
import { CommonModule } from "@angular/common"


@NgModule({
    declarations: [AppEmailDirective],
    imports: [CommonModule],
    exports: [AppEmailDirective]
})

export class SharedModule {}

export const EMAIL_DOMAINS = ["bg", "com", "net", "org"];