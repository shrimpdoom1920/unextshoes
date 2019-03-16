import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderJumboComponent } from './components/header-jumbo/header-jumbo.component';
import { SectionShoesComponent } from './components/section-shoes/section-shoes.component';
import { SectionCarosouelComponent } from './components/section-carosouel/section-carosouel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderJumboComponent,
    SectionShoesComponent,
    SectionCarosouelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
