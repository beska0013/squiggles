import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { SqHeaderComponent } from './components/svgChildComponents/sq-header/sq-header.component';
import { SqAboutComponent } from './components/svgChildComponents/sq-about/sq-about.component';
import { SqCompaniesComponent } from './components/svgChildComponents/sq-companies/sq-companies.component';
import { SqSpongeComponent } from './components/svgChildComponents/sq-sponge/sq-sponge.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InViewDirective } from './directive/in-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    CompaniesComponent,
    BlogComponent,
    ContactComponent,
    SqHeaderComponent,
    SqAboutComponent,
    SqCompaniesComponent,
    SqSpongeComponent,
    InViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
