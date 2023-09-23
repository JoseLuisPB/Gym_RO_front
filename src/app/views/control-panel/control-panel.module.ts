import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { HomeCpComponent } from './home-cp/home-cp.component';



@NgModule({
  declarations: [
    HomeCpComponent
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule
  ]
})
export class ControlPanelModule { }
