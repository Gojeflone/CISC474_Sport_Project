import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfApisComponent } from './components/list-of-apis/list-of-apis.component';
import { RequestmanComponent } from './components/requestman/requestman.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listOfApis'},
  {path: 'listOfApis', component: ListOfApisComponent},
  {path: 'requestman', component: RequestmanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
