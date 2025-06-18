import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Header,Footer,NavBar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
