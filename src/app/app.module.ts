import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { BoxesComponent } from './boxes/boxes.component';
import { FlyoutComponent } from './flyout/flyout.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoxesComponent,
    FlyoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
