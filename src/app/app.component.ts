import { Component } from '@angular/core';
import { PlayerCreator } from './model/player-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UDisc Live';
  masterPlayerList: PlayerCreator[] = [
    new PlayerCreator('Sean', 'McDermott', 0),
    new PlayerCreator('Abigail', 'Wallace', 0),
    new PlayerCreator('Walt', 'Whitman', 0)
  ]

  selectedPlayer = null;

  editPlayer(clickedPlayer) {
    this.selectedPlayer = clickedPlayer;
  }

  addPlayer(newPlayer: PlayerCreator) {
    this.masterPlayerList.push(newPlayer);
  }

  finishedEditing() {
    this.selectedPlayer = null;
  }
}
