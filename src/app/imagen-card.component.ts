import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-card',
  templateUrl: './imagen-card.component.html',
  styleUrls: ['./imagen-card.component.css']
})
export class ImagenCardComponent {
  @Input() urlImagen : string = "";
}
