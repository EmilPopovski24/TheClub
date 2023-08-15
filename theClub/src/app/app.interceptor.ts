// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable, Provider } from "@angular/core";
// import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";


// // const { apiUrl } = environment;

// @Injectable()
// export class AppInterceptor implements HttpInterceptor {
    
//     intercept (
//         request: HttpRequest<any>,
//         next: HttpHandler ):
//          Observable<HttpEvent<any>> {
//             if(request.url.startsWith('/api')) {
//                 request = request.clone({
//                     url: request.url.replace('/api', apiUrl), 
                    
//                     withCredentials: true, //for cookie setup
//          })};
//          return next.handle(request);
//     }          
// }

// export const appInterceptorProvider: Provider = {
//     multi: true,
//     useClass: AppInterceptor,
//     provide: HTTP_INTERCEPTORS,
// }