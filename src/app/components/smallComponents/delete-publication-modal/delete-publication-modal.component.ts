import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DeleteWorkSpaceModalComponent } from '../delete-work-space-modal/delete-work-space-modal.component';
import { PublicationService } from '../../../services/publication.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Answer } from '../../../interfaces/answer';
import { MySpaceComponent } from '../../pagesComponents/my-space/my-space.component';

@Component({
  selector: 'app-delete-publication-modal',
  templateUrl: './delete-publication-modal.component.html',
  styleUrls: ['./delete-publication-modal.component.scss'] 
})
export class DeletePublicationModalComponent {
  
  result: Answer | undefined; 
  @Output() notaDeleted: EventEmitter<void> = new EventEmitter<void>(); 

  constructor (
    public dialogRef: MatDialogRef<DeleteWorkSpaceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pId: number },
    public pService : PublicationService
  ) {}

  realizeDelete(): void {
    this.pService.deleteById(this.data.pId).subscribe(
      (response: Answer) => { 
        this.result = response; 
        if (this.result.result == 'success') { 
          console.log('Publicación borrada correctamente');
          this.dialogRef.close('success');
        } else {
          console.error('Error al eliminar el publicación:', this.result.result); 
        }
      },
      (error) => {
        console.error('Error al eliminar el espacio de publicación:', error);
      }
    );
  }

  dissmiss() {
    this.dialogRef.close();
  }

}
