import {Component, EventEmitter, Input, Output} from "@angular/core";
import {InfoComponent} from "../info/info.component";

@Component({
  selector: "app-hobby-element",
  template: `
    <li (click)="onRemoveHobby()">{{hobbyName}}</li>
    <app-info></app-info>`,
  standalone: true,
  imports: [InfoComponent]
})

export class HobbyElementComponent {
  @Input() hobbyName: string;
  @Output() hobbyRemoved: EventEmitter<string> = new EventEmitter();

  onRemoveHobby() {
    this.hobbyRemoved.emit(this.hobbyName);
  }
};
