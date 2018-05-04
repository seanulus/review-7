import { Component } from '@angular/core';
import { PlayerCreator } from './model/player-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterPlayerList: PlayerCreator[] = [
    new PlayerCreator('Sean', 'McDermott', []),
    new PlayerCreator('Abigail', 'Wallace', []),
    new PlayerCreator('Walt', 'Whitman', [])
  ]
}
