
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';

export class HeaderStates {

  public headerStates = [{
    name: "login",
    views: {
      header:{component:LoginHeaderComponent},
    }
  },{
    name: "register",
    views: {
      header:{component:RegisterHeaderComponent}
    }
  }];
}
