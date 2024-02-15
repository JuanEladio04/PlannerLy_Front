import { WorkSpace } from '../../../interfaces/work-space';
import { NewWorkSpaceModalComponent } from '../new-work-space-modal/new-work-space-modal.component';
import { WorkSpaceService } from './../../../services/work-space.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-space-tool-bar',
  templateUrl: './my-space-tool-bar.component.html',
  styleUrls: ['./my-space-tool-bar.component.scss']
})
export class MySpaceToolBarComponent implements OnInit {
  workSpaces: WorkSpace[] = [];

  constructor(
    private workSpaceService: WorkSpaceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getWorkSpaces();
  }

  public getWorkSpaces() {
    this.workSpaceService.findByUser().subscribe(
      (workSpaces: WorkSpace[]) => {
        this.workSpaces = workSpaces;
        this.workSpaces.forEach(ws => {
        });
      },
      (error) => {
        console.error('Error al cargar los espacios de trabajo:', error);
      }
    );
  }

  openNewWorkSpaceModal(): void {
    const dialogRef = this.dialog.open(NewWorkSpaceModalComponent, {
      width: '500px',
    });
  }
}