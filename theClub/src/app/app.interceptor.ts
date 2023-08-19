import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { ErrorService } from "./core/error/error.service";
import { Router } from "@angular/router";


const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    
    constructor(private router:Router, private errorService: ErrorService) {}

    intercept (
        req: HttpRequest<any>,
        next: HttpHandler ):
         Observable<HttpEvent<any>> {
            if(req.url.startsWith('/api')) {
                req = req.clone({
                    url: req.url.replace(`/api`, apiUrl), 
                    withCredentials: true, //for cookie setup
         })} ;
         return next.handle(req).pipe(
            catchError((err)=>{
                this.errorService.setError(err);
                if(err.status === 401) {
                    this.router.navigateByUrl("/auth/login")
                }else {
                    this.router.navigateByUrl("/error")
                }
                this.router.navigateByUrl('/error')
                return [err]
            })
        );
    }          
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}