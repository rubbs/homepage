import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyMaterialModuleModule} from './my-material-module/my-material-module.module';
import { AppRoutingModule } from './/app-routing.module';
import { WeihnachtsmarktComponent } from './weihnachtsmarkt/weihnachtsmarkt.component';
import { PutzplanComponent } from './putzplan/putzplan.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    WeihnachtsmarktComponent,
    PutzplanComponent,
    DisclaimerComponent,
    DatenschutzComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
