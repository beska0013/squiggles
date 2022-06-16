import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BlogListComponent } from './blog-list/blog-list.component';
import { SvgSquiggleComponent } from './components/svg-squiggle/svg-squiggle.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    SvgSquiggleComponent,
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
