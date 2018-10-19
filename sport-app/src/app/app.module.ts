import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListOfApisComponent } from './components/list-of-apis/list-of-apis.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestmanComponent } from './components/requestman/requestman.component';
import { FindImageUrlsPipe } from './pipes/find-image-urls.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListOfApisComponent,
    RequestmanComponent,
    FindImageUrlsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
