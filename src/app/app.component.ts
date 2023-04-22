import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loading';
  constructor(){
    setTimeout(() => {
      this.title = "sourav's blogs";

    },2000);
  }
}
