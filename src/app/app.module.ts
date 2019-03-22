import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
     const app = createCustomElement(AppComponent, { injector});
     customElements.define('task-list', app);
  }
   ngDoBootstrap() {}
}
