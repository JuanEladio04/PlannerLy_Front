import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  token: string = '';

  constructor(
    private auth : AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  closeSession(): void {
    this.auth.closeSession();
    this.isLoggedIn = this.auth.isLoggedIn();
    window.location.reload();
  }
  
}
