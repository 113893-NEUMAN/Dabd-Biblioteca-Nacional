import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BibliotecaNacional';

  showBook: boolean = true;
  
  mostrarLibro() {
    this.showBook = !this.showBook;
  }
}
