import { Component, Output, EventEmitter } from '@angular/core';
import { PlayerCreator } from '../model/player-model'
@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent {
  @Output() sendPlayer = new EventEmitter();

  submitForm(firstName: string, lastName: string, score: Array<number>) {
    let newPlayer: PlayerCreator = new PlayerCreator(firstName, lastName, score);
    this.sendPlayer.emit(newPlayer);
  }

  constructor() { }

  ngOnInit() {
  }

}
