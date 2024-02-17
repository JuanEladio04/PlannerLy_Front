import { Answer } from './../../../interfaces/answer';
import { Component, Inject } from '@angular/core';
import { WorkSpaceService } from '../../../services/work-space.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-access-work-space-modal',
  templateUrl: './access-work-space-modal.component.html',
  styleUrl: './access-work-space-modal.component.scss',
})
export class AccessWorkSpaceModalComponent {
  accessUsers: Usuario[] = [];
  email: string = '';
  error: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { workSpaceId: number },
    private uService: UsuarioService,
    public dialogRef: MatDialogRef<AccessWorkSpaceModalComponent>
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.uService.findByWorkSpaceId(this.data.workSpaceId).subscribe(
      (users: Usuario[]) => {
        this.accessUsers = users;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
        this.error = error;
      }
    );
  }

  addUsersToWorkSpace() {
    this.uService
      .addUserToWorkSpace(this.data.workSpaceId, this.email)
      .subscribe(
        (result: Answer) => {
          if (result.result == 'success') {
            this.error = 'Usuario añadido con exito';
            this.getUsers();
            this.email = '';
          } else {
            this.error = result.result;
          }
        },
        (error) => {
          console.error('Error al añadir usuario:', error);
        }
      );
  }

  quitUserFromWorkSpace(userId: number) {
    this.uService.quitUserToWorkSpace(this.data.workSpaceId, userId).subscribe(
      (result: Answer) => {
        if (result.result == 'success') {
          this.error = 'Usuario eliminado del espacio de trabajo con exito';
          this.getUsers();
        } else {
          this.error = result.result;
        }
      },
      (error) => {
        console.error('Error al quitar usuario:', error);
      }
    );
  }
}
