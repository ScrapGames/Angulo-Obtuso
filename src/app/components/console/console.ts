import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-console',
  imports: [],
  templateUrl: './console.html',
})
export class Console {
  /* Método que permite copiar el texto que esté dentro del componente al clicar
  sobre el boton de este*/
  copiar(){
    const elem = document.getElementsByTagName("code")[0];
    const val = elem.innerText;
    navigator.clipboard.writeText(val);
  }
}
