import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('currentUserValue')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('currentUserValue')}`,
        },
      });
    }
    return next.handle(request);
  }
}
