import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientsPageComponent } from './containers/clients-page/clients-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ClientsRoutingModule {
}
