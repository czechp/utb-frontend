import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StatementService} from "../../service/statement.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private statementService: StatementService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.statementService.publicInfo("Nie masz wystarczających uprawnień do tej akcji");
          this.router.navigate(["/forbidden"]);
        } else {
          const message = error.error?.message || "Nieznany błąd skontaktuj się z czechprz@gmail.com";
          this.statementService.publicInfo(message);
        }

        return throwError(() => error);
      })
    );
  }

}
