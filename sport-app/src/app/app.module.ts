import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListOfApisComponent } from './components/list-of-apis/list-of-apis.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestmanComponent } from './components/requestman/requestman.component';
import { FindImageUrlsPipe } from './pipes/find-image-urls.pipe';
import { FilterPipe} from './components/list-of-apis/filter.pipe';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListOfApisComponent,
    RequestmanComponent,
    FindImageUrlsPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
