import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { PageCardComponent } from './page-card/page-card.component';

@NgModule({
  declarations: [
    PageCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [PageCardComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const pageCard = createCustomElement(PageCardComponent, { injector });
    customElements.define('page-card', pageCard);
  }

  ngDoBootstrap() {}
}
