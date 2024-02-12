import { AuthService } from './../../../services/auth.service';
import { Usuario } from './../../../interfaces/usuario';
import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Answer } from '../../../interfaces/answer';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  user : Usuario = {
    id: 0,
    userName: '',
    name: '',
    secondName: '',
    f_nac: '',
    phone_number: 0,
    email: '',
    password: '',
  };

  error: string = '';

  constructor(
    private cn: UsuarioService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  public realizeUserRegister() {
    this.cn.insertUser(this.user).subscribe((result: Answer) => {
      if (result.result == 'success') {
        console.log('User successfully registered');

        this.cn.authUserLogin(this.user.email, this.user.password).subscribe((result: Answer) => {
          var response: Answer = result;
          console.log(response.result);
          if (response.result == 'success') {
            const token = result.tokken;
            this.cookieService.set('jwt', token, 7); 
            window.location.reload();
          } else {
            this.error = response.result;
          }
        });

      } else {
        console.log(result.result);
      }
    });
  }
}
