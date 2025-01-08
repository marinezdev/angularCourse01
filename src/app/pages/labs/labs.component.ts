import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenid@s!';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
  name = signal('Rubén');
  age = 42;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name:'Marinez',
    age:42,
    avatar:'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler() 
  {
    alert('hola.....');
  }

  changeHandler(event: Event) 
  {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

    console.log(event);
  }

  keydownHandler(event: KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
