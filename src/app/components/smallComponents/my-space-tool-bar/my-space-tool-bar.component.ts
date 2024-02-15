import { WorkSpace } from '../../../interfaces/work-space';
import { WorkSpaceService } from './../../../services/work-space.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-space-tool-bar',
  templateUrl: './my-space-tool-bar.component.html',
  styleUrls: ['./my-space-tool-bar.component.scss']
})
export class MySpaceToolBarComponent implements OnInit {
  workSpaces: WorkSpace[] = [];

  constructor(private workSpaceService: WorkSpaceService) { }

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
}
