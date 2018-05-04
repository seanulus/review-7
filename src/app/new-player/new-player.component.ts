import { Component, Output, EventEmitter } from '@angular/core';
import { PlayerCreator } from '../model/player-model'
@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent {
  @Output() sendPlayer = new EventEmitter();

  newPlayer = false;

  submitForm(firstName: string, lastName: string, score: number) {
    let newPlayer: PlayerCreator = new PlayerCreator(firstName, lastName, score);
    this.sendPlayer.emit(newPlayer);
  }

  newPlayer1() {
    this.newPlayer = true;
  }

  finishedNewPlayer() {
    this.newPlayer = false;
  }

  constructor() { }

}
