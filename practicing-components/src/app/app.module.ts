import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { SubsectionComponent } from './components/subsection/subsection.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SubsectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
