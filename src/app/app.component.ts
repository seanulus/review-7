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
    new PlayerCreator('Sean', 'McDermott', []),
    new PlayerCreator('Abigail', 'Wallace', []),
    new PlayerCreator('Walt', 'Whitman', [])
  ]

  addPlayer(newPlayer: PlayerCreator) {
    this.masterPlayerList.push(newPlayer);
  }
}
