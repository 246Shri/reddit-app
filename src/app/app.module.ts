import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropDownDirctive } from './dropdrown.directive';
import { HeaderComponent } from './header/header.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirctive,
    ListComponentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
