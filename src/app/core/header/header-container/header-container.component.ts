import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { AuthService } from '../../../shared/services/auth.service';
import { faShoppingBasket, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  public faShoppingBasket = faShoppingBasket;
  public faEnvelope = faEnvelope;
  public faUser = faUser;
  public faGoogle = faGoogle;
  public faFacebook = faFacebook;

  public loggedIn = false;
  public loginMethods:any[] = [];

  constructor(public $state: StateService, private authService:AuthService) { }

  ngOnInit() {
    this.authService.getExternalLogins().subscribe((logins) => {
      this.loginMethods = logins;
    });

  }
  
  login(name) {
    this.authService.login(name).subscribe((result)=> { 
      console.log(result);
    });
  }
  goto(stateName:string) {
console.log(stateName);
    this.$state.go(stateName);
  }

}
