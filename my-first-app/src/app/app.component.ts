import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Interpolation unidirectionnelle : dataBinding
  message = "Hello World";

  // Interpolation unidirectionnelle : propertyBinding
  image_source = "https://picsum.photos/200";

  // Interpolation unidirectionnelle : eventBinding
  changeMessage()
  {
    this.message = "Hello There !";
  }

  // Interpolation birectionnelle : twoWayBinding
  username: string = "Bobby";  
}
