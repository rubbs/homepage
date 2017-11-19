import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyMaterialModuleModule} from './my-material-module/my-material-module.module';
import { AppRoutingModule } from './/app-routing.module';
import { WeihnachtsmarktComponent } from './weihnachtsmarkt/weihnachtsmarkt.component';
import { PutzplanComponent } from './putzplan/putzplan.component';


@NgModule({
  declarations: [
    AppComponent,
    WeihnachtsmarktComponent,
    PutzplanComponent
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
