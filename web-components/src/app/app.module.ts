import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { PageCardComponent } from './page-card/page-card.component';
import { SharedComponentsModule } from './shared/shared-components.module';
import { IconComponent } from './shared/icon-component/icon.component';

@NgModule({
  declarations: [
    PageCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  providers: [],
  entryComponents: [PageCardComponent, IconComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const pageCard = createCustomElement(PageCardComponent, { injector });
    const icon = createCustomElement(IconComponent, { injector });
    customElements.define('page-card', pageCard);
    customElements.define('icon-component', icon);
  }

  ngDoBootstrap() {}
}
