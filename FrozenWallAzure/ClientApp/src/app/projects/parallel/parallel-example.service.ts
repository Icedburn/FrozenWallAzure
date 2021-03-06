import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ParallelExampleService {
  constructor(private http: HttpClient) {}
  private projectUrl = 'http://iced-chat.icedburn.com:9999/';

  private static handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getResponse(textInput: string): Observable<string> {

    const headers = new HttpHeaders()
      .append('Access-Control-Request-Headers', '*');

    const options = {
      headers
    };

    console.log(textInput);
    return this.http.get<string>(this.projectUrl + textInput, options)
      .pipe(
        tap(data => console.log('ParallelResponse: ' + data["result"])),
        catchError(ParallelExampleService.handleError)
      );
  }
}
