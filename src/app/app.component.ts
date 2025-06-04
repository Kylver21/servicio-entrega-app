import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicio-entrega-app';
}
