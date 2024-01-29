import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HobbiesComponent} from "./hobbies/hobbies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HobbiesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

}

