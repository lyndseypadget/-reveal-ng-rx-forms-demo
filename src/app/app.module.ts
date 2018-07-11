import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterials } from './custom-materials/custom-materials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
