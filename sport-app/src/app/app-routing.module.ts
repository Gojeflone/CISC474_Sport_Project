import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfApisComponent } from './components/list-of-apis/list-of-apis.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listOfApis'},
  {path: 'listOfApis', component: ListOfApisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
