import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { CidadeEstadoComponent } from './cidade-estado.component';
import { DxiFieldModule } from 'devextreme-angular/ui/nested';
import { DxSelectBoxModule } from 'devextreme-angular';



@NgModule({
  declarations:
  [CidadeEstadoComponent],
  imports: [
    CommonModule,
    DxiFieldModule,
    DxSelectBoxModule,
    HttpClientModule
  ],
  exports: [CidadeEstadoComponent]
})
export class CidadeEstadoModule { }
