import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Answer } from '../../../interfaces/answer';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corregido 'styleUrl' a 'styleUrls'
})
export class LoginComponent {
  constructor(
    private cn: UsuarioService,
    private router: Router,    
    private cookieService: CookieService
  ) {}

  email: string = '';
  password: string = '';
  error: string = '';

  login() {
    if (this.email == '' || this.password == '') {
      this.error = 'No debes dejar ningún campo vacío'; 
    } else {
      this.cn.authUserLogin(this.email, this.password).subscribe((result: Answer) => {
        var response: Answer = result;
        console.log(response.result);
        if (response.result == 'success') {
          const token = result.tokken;
          this.cookieService.set('jwt', token, 7); 
          this.router.navigate(['/']); 
        } else {
          this.error = response.result;
        }
      });
    }
  }
}
