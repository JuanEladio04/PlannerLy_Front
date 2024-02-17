import { Answer } from './../../../interfaces/answer';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkSpaceService } from '../../../services/work-space.service';

@Component({
  selector: 'app-delete-work-space-modal',
  templateUrl: './delete-work-space-modal.component.html',
  styleUrls: ['./delete-work-space-modal.component.scss'], // Se corrigió el nombre del atributo
})
export class DeleteWorkSpaceModalComponent {
  result: Answer | undefined; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { workSpaceId: number },
    private wkService: WorkSpaceService,
    public dialogRef: MatDialogRef<DeleteWorkSpaceModalComponent>
  ) {}

  realizeDelete(): void {
    this.wkService.deleteById(this.data.workSpaceId).subscribe(
      (response: Answer) => { 
        this.result = response; 
        if (this.result.result == 'success') { 
          console.log('Espacio de trabajo eliminado correctamente');
          window.location.reload();
          this.dialogRef.close();
        } else {
          console.error('Error al eliminar el espacio de trabajo:', this.result.result); 
        }
      },
      (error) => {
        console.error('Error al eliminar el espacio de trabajo:', error);
      }
    );
  }

  dissmiss() {
    this.dialogRef.close();
  }
}

