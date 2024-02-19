import { Component, OnInit } from '@angular/core';
import { WorkSpace } from '../../../interfaces/work-space';
import { WorkSpaceService } from '../../../services/work-space.service';
import { Notas } from '../../../interfaces/nota';
import { NotaService } from '../../../services/nota.service';
import { Answer } from '../../../interfaces/answer';
import { DeleteWorkSpaceModalComponent } from '../../smallComponents/delete-work-space-modal/delete-work-space-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DeletePublicationModalComponent } from '../../smallComponents/delete-publication-modal/delete-publication-modal.component';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.scss',
})
export class MySpaceComponent {
  editingNoteId: number | null = null;

  workSpace: WorkSpace = {
    id: -1,
    name: '',
    description: '',
  };

  notas: Notas[] = [];

  nNota: Notas = {
    pId: -1,
    title: '',
    subtitle: '',
    content: '',
  };

  constructor(
    private wkService: WorkSpaceService,
    private nService: NotaService,
    private dialog: MatDialog
  ) {}

  toggleEditing(noteId: number) {
    this.editingNoteId = noteId === this.editingNoteId ? null : noteId;
    this.getNotas(this.workSpace.id);
  }
  

  getSelectedWorkSpace(selectedWorkSpaceId: any) {
    this.wkService.findById(parseInt(selectedWorkSpaceId)).subscribe(
      (selectedWorkSpace: WorkSpace) => {
        this.workSpace = selectedWorkSpace;
      },
      (error: any) => {
        console.log('No es posible cargar el espacio de trabajo');
      }
    );

    this.getNotas(selectedWorkSpaceId);
  }

  //**Notas****************************************************************************************************** */
  getNotas(workSpaceId: number) {
    this.nService.findByWorkSpaceId(workSpaceId).subscribe(
      (wkNotas: Notas[]) => {
        this.notas = wkNotas;
      },
      (error: any) => {
        console.log('No es posible cargar las notas');
      }
    );
  }

  createNota() {
    this.nService.createNota(this.workSpace.id, this.nNota).subscribe(
      (result: Answer) => {
        if (result.result == 'success') {
          this.getNotas(this.workSpace.id);
          this.nNota = {
            pId: -1,
            title: '',
            subtitle: '',
            content: '',
          };
        } else {
          console.log(result.result);
        }
      },
      (error: any) => {
        console.log('No es posible crear nota');
      }
    );
  }

  updateNota(nota : Notas) {
    this.nService.updateNota(nota).subscribe(
      (result: Answer) => {
        if (result.result == 'success') {
          this.getNotas(this.workSpace.id);
        } else {
          console.log(result.result);
        }
      },
      (error: any) => {
        console.log('No es posible actualizar nota');
      }
    );
  }

  /**Delete publication *************************************************************************** */
  openDeletePublicationModal(publicationId: number) {
    const dialogRef = this.dialog.open(DeletePublicationModalComponent, {
      data: { pId: publicationId },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getNotas(this.workSpace.id); 
      }
    });
  }

}
