import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  token: string = '';

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('jwt'); 

    if (this.token != null) {
      this.isLoggedIn = true;
    }
  }

  closeSession(): void {
    this.cookieService.delete('jwt');
    this.isLoggedIn = false;
  }
}
