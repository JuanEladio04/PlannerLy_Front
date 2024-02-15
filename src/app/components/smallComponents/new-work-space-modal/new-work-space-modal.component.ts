import { WorkSpace } from './../../../interfaces/work-space';
import { Component } from '@angular/core';
import { WorkSpaceService } from '../../../services/work-space.service';
import { Answer } from '../../../interfaces/answer';

@Component({
  selector: 'app-new-work-space-modal',
  templateUrl: './new-work-space-modal.component.html',
  styleUrl: './new-work-space-modal.component.scss'
})
export class NewWorkSpaceModalComponent {

  workSpace : WorkSpace = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(
    private wsService : WorkSpaceService,
  ) { }

  public createWorkSpace() {
    this.wsService.createWorkSpace(this.workSpace).subscribe((result: Answer) => {
        if(result.result == "success") {
          window.location.reload();
        }
        else {
          console.log(result.result);
        }
    });
}


}
