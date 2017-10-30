import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PlaygroundComponent} from './playground/playground.component';
import {NavbarComponent} from './navbar/navbar.component';
import {Http, HttpModule} from "@angular/http";
import { TreeComponent } from './tree/tree.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    NavbarComponent,
    TreeComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
