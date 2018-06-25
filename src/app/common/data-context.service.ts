import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataContextService {

  constructor(private http: HttpClient) { }

  httpGet(){
    let observable: any;
    observable = this.http.get('/routes/posts').pipe(map((response) => response));
    return observable;
  }
}
