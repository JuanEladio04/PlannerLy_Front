import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index-card',
  templateUrl: './index-card.component.html',
  styleUrl: './index-card.component.scss'
})
export class IndexCardComponent {
  @Input() imagenUrl: string = '\src\assets\img\index\notesCard.png';
}
