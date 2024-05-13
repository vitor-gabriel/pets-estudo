import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OwnersRoutingModule } from './owners-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { OwnersComponent } from './owners.component';

@NgModule({
  declarations: [OwnersComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoModule,
    OwnersRoutingModule
  ]
})
export class OwnersModule { }
