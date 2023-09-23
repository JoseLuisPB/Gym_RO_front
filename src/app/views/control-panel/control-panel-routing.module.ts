import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCpComponent } from './home-cp/home-cp.component';


const routes: Routes = [
  {
    path:'',
    component: HomeCpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
