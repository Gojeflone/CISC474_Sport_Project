import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ListOfApisComponent } from './components/list-of-apis/list-of-apis.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe} from './components/list-of-apis/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListOfApisComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
