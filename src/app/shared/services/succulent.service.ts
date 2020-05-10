import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucculentService {

  constructor(private http: HttpClient) { }
  
  private productUrl = "api/Product"

public getSucs () {
          let result = this.http.get(this.productUrl);
  
          return result;
        }
}
