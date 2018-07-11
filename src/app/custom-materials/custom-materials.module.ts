import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class CustomMaterials { }
