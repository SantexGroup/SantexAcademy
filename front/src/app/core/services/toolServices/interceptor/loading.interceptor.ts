import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoadingService } from "../loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingSrv: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingSrv.show();
        return next.handle(req).pipe(
            finalize(() => {
                this.loadingSrv.hide()
            })
        )
    }

}