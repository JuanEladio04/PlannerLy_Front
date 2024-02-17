import { Component, OnInit } from '@angular/core';
import { WorkSpace } from '../../../interfaces/work-space';
import { WorkSpaceService } from '../../../services/work-space.service';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.scss',
})
export class MySpaceComponent {

    workSpace : WorkSpace = {
      id : -1,
      name : '',
      description : ''
    }

  constructor(
    private wkService : WorkSpaceService
  ) {}
  
  getSelectedWorkSpace(selectedWorkSpaceId: any) {
    this.wkService.findById(parseInt(selectedWorkSpaceId)).subscribe(
        (selectedWorkSpace : WorkSpace) => {
          this.workSpace = selectedWorkSpace;
        },
        (error: any) => {
          console.log("No es posible cargar el espacio de trabajo");
        }
      );
    
  }

}
