import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NamePipe } from './name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    EditPlayerComponent,
    NewPlayerComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
