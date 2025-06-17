import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { NavBar } from '../shared/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'sportsvilla_web';
}
