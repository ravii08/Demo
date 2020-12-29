import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  _url = "http://localhost:3000/";
  constructor(private _http: HttpClient) { }

  submit(formData) {
    return this._http.post<any>(this._url, formData);
  }
}
