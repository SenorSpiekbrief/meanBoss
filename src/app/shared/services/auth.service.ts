import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private externalLoginsUrl = "/api/Account/ExternalLogins?returnUrl=%2F&generateState=true";
private externalLoginUrl = "/api/Account/ExternalLogin?provider=";
private externalLoginsObs: any;
public externalLogins:any;

  constructor(private http: HttpClient) {
      this.getExternalLogins().subscribe((logins) => {
          this.externalLogins = logins;
      });
  }

  public getExternalLogins () {
    if(!this.externalLoginsObs) {
      this.externalLoginsObs = this.http.get(this.externalLoginsUrl);
    }
    return  this.externalLoginsObs;
  }

  public login(name:string) {
    return this.http.get(name);
  }
}
