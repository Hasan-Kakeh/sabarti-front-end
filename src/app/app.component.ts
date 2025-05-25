import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from './layouts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host:{
    class:'h-full flex flex-col'
  }
})
export class AppComponent {
  title = 'sabarti';
}
