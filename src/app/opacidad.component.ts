import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opacidad',
  templateUrl: './opacidad.component.html',
  styleUrls: ['./opacidad.component.css']
})
export class OpacidadComponent {  
  @Output() opacidad: EventEmitter<number> = new EventEmitter();
}
