import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerCreator } from '../model/player-model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  @Input() childPlayersList: PlayerCreator[];
  @Output() clickSender = new EventEmitter();

  selectedPlayer = null;

  editButtonClicked(playerToEdit: PlayerCreator) {
    this.clickSender.emit(playerToEdit);
  }

  constructor() { }

}
