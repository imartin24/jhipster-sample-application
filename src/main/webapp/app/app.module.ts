import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CiberHealthFakeSharedModule } from 'app/shared/shared.module';
import { CiberHealthFakeCoreModule } from 'app/core/core.module';
import { CiberHealthFakeAppRoutingModule } from './app-routing.module';
import { CiberHealthFakeHomeModule } from './home/home.module';
import { CiberHealthFakeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CiberHealthFakeSharedModule,
    CiberHealthFakeCoreModule,
    CiberHealthFakeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CiberHealthFakeEntityModule,
    CiberHealthFakeAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CiberHealthFakeAppModule {}
