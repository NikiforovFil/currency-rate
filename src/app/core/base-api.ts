import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class BaseApi {
    constructor(public http: HttpClient) { }

    public get(url): Observable<any> {
        return this.http.get(url);
    }
}