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
  scoreArray = [];

  editPlayerClicked(playerToEdit: PlayerCreator) {
    this.clickSender.emit(playerToEdit);
  }

  birdie(clickedPlayer) {
    clickedPlayer.score -= 1;
    this.scoreArray.push(2)
  }

  par(clickedPlayer) {
    clickedPlayer.score += 0;
    this.scoreArray.push(3);
  }

  bogey(clickedPlayer) {
    clickedPlayer.score += 1;
    this.scoreArray.push(4);
  }
  constructor() { }

}
