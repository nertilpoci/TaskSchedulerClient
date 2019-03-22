import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { JoblistComponent } from './joblist/joblist.component';

@NgModule({
  declarations: [
    JoblistComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatListModule
  ],
  bootstrap: [],
  providers: [],
  entryComponents: [JoblistComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const joblist = createCustomElement(JoblistComponent, { injector});
    customElements.define('scheduled-job-list', joblist);
  }
  ngDoBootstrap() {}
}
