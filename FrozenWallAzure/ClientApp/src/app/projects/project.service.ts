import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IProject} from './IProject';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) {}
  private projectUrl = 'data/projects.json';

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

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(ProjectService.handleError)
      );
  }
}
