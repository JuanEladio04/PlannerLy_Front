import { Usuario } from './../../../interfaces/usuario';
import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.css'
})
export class MySpaceComponent {
  MySpaceComponent: any;
  user: Usuario = {
    id: 0,
    userName: '',
    name: '',
    secondName: '',
    f_nac: '',
    phone_number: 0,
    email: ''
  };

  constructor(private cn: UsuarioService) {}

  ngOnInit() {
    this.cn.findById(1).subscribe((usuario: Usuario) => {
      this.user = usuario;
    });
  }
}
