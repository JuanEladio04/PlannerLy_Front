import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }
  token: string = '';


  isLoggedIn(): boolean {
    this.token = this.cookieService.get('jwt'); 
  
    if (this.token != null && this.token !== "") {
      return true;
    } else {
      return false;
    }
  }

  closeSession(): void {
    this.cookieService.delete('jwt', '/', 'localhost'); 
    window.location.reload();
  }

}
