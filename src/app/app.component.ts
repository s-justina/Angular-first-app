import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {InfoComponent} from "./info/info.component";
import {FormsModule} from "@angular/forms";
import {HobbyElementComponent} from "./hobbyElement/hobbyElement.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InfoComponent, FormsModule, HobbyElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  hobbies: string[] = ["sport", "reading books"];
  @Input() newHobby: string;
  hobbyDeleted: boolean = false;

  addNewHobby() {
    this.hobbies.push(this.newHobby);
  };

  onHobbyRemoved(element: string) {
    const position = this.hobbies.indexOf(element);
    this.hobbies.splice(position, 1);
    this.hobbyDeleted = true;

    setTimeout(() => {
      this.hobbyDeleted = false;
    }, 3000)
  }
}

