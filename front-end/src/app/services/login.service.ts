import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: string,password: string){
    if(userName == 'Abdallha Hamdy' && password == '01110495598'){
      sessionStorage.setItem("isRegister",userName);
      return true;
    }
    return false;
  }

  isLogin(){
    return !(sessionStorage.getItem("isRegister") == null);
  }

  logOut(){
    sessionStorage.removeItem("isRegister");
  }
}
