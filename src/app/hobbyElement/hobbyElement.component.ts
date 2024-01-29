import {Component, EventEmitter, Input, Output} from "@angular/core";
import {InfoComponent} from "../info/info.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: "app-hobby-element",
  template: `
    <li (click)="onRemoveHobby()" [ngStyle]="{backgroundColor: getColor(isEvenHobby)}">{{hobbyName}}</li>
    <app-info></app-info>`,
  standalone: true,
  imports: [InfoComponent, CommonModule]
})

export class HobbyElementComponent {
  @Input() hobbyName: string;
  @Output() hobbyRemoved: EventEmitter<string> = new EventEmitter();
  @Input() isEvenHobby: boolean;

  onRemoveHobby() {
    this.hobbyRemoved.emit(this.hobbyName);
  }

  getColor(isEvenHobby: boolean){
    return isEvenHobby ? "green" : "red"
  }
};
