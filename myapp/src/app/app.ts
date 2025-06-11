import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  // template:'<h1>Salut {{title}}</h1>',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Raul';
}
