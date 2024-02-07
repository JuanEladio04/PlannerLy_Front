import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Answer } from '../../../interfaces/answer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private cn: UsuarioService,
    private router: Router    
    ) {}

  email: string = '';
  password: string = '';
  error: string = '';

  login() {
    if (this.email == '' || this.password == '') {
      this.error = 'No debes dejar ningun campo vacio';
    } else {
        this.cn.authUserLogin(this.email, this.password).subscribe((result: Answer) => {
          var response: Answer = result;
          console.log(response.result);
            if(response.result =='success') {
              this.router.navigate(['/']); 
            } else {
              this.error = response.result;
            }
        });
    }
  }
}
