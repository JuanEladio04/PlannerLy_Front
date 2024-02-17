import { Component, EventEmitter, Output } from '@angular/core';
import { WorkSpace } from '../../../interfaces/work-space';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Output() obtainedObject = new EventEmitter<any>();

  public selectWorkSpace(event: any) {
    // const selectedWorkSpace: WorkSpace = event.target.value;
    // this.obtainedObject.emit(selectedWorkSpace);
    this.obtainedObject.emit(event.target.value);

  }
}
