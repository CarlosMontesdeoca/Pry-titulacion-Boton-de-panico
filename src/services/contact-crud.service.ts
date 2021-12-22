import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Contact {
  _id: number;
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactCrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<any> {
    return this.httpClient.post<Contact>('http://localhost:5000/api/create-contact', contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<Contact>('Error occured'))
      );
  }

  // getUser(id): Observable<User[]> {
  //   return this.httpClient.get<User[]>('http://localhost:5000/api/fetch-user/' + id)
  //     .pipe(
  //       tap(_ => console.log(`User fetched: ${id}`)),
  //       catchError(this.handleError<User[]>(`Get user id=${id}`))
  //     );
  // }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>('http://localhost:5000/api')
      .pipe(
        tap(users => console.log('Contacts retrieved!')),
        catchError(this.handleError<Contact[]>('Get contact', []))
      );
  }

  // updateUser(id, user: User): Observable<any> {
  //   return this.httpClient.put('http://localhost:5000/api/update-user/' + id, user, this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`User updated: ${id}`)),
  //       catchError(this.handleError<User[]>('Update user'))
  //     );
  // }

  deleteContact(id): Observable<Contact[]> {
    return this.httpClient.delete<Contact[]>('http://localhost:5000/api/delete-contact/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Contact deleted: ${id}`)),
        catchError(this.handleError<Contact[]>('Contact user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}
