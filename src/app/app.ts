import { Component, signal, forwardRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, forwardRef(() => primerComp)],
  templateUrl: './layouts/app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Me cago en los muertos');
}

/**
 * !----------------------------------------------------------------------------------
 * Prueba de creacion del primer componente del demoino
 * TODO: Lo que te salga de las pelotas
 */

@Component({
  selector: 'primerComp',
  imports: [RouterOutlet],
  templateUrl: './layouts/primerComp.html',
  styleUrl: './app.css'
})
export class primerComp{
  nabo:string = "Esto es un nabo como una catedral";
}