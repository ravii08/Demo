import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log("Cloned Request"); 
        
        console.log(req.url);
        const authToken = "My Auth Token";
        const authReq = req.clone({
            setHeaders : {Authorization: authToken}
        })
        return next.handle(authReq);
    }
}