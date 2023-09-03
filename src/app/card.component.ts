import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  nombreLibro : string = "El Principito";
  descripcion : string = "Libro de culto";
  categoria : string = "Literatura infantil";
  anioPublicacion: number = 1943;
  autor : string = "Antoine de Saint-Exupéry";
  imagenUrl : string = "https://www.infobae.com/new-resizer/muoU1VQDpe4Fa2DX0JLMLp3S_YM=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/16142947/portada_el-principito-edicion-color_antoine-de-saint-exupery_201501160347.jpg";
  
  @Input() showBook : boolean = true;

  public sumarAnio(){
    this.anioPublicacion += 1;
  }
}
