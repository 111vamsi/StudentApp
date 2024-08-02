import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POffice } from './post-office.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinCodeService {
  constructor(private http: HttpClient) {}

  getPostOfficeDetails(pincode: string): Observable<POffice[]> {
    return this.http.get<POffice[]>(
      'https://api.postalpincode.in/pincode/' + pincode
    );
  }
}
