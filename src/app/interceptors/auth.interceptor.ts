import { CookieService } from 'ngx-cookie-service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.cookieService.get('jwt');

    const authReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}` 
      }
    });

    return next.handle(authReq);
  }
}
