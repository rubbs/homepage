import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WeihnachtsmarktComponent} from './weihnachtsmarkt/weihnachtsmarkt.component';
import {PutzplanComponent} from './putzplan/putzplan.component';
import {DisclaimerComponent} from './disclaimer/disclaimer.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {ImpressumComponent} from './impressum/impressum.component';

const routes: Routes = [
  {path: 'weihnachtsmarkt', component: WeihnachtsmarktComponent},
  {path: 'putzplan', component: PutzplanComponent},

  {path: 'disclaimer', component: DisclaimerComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
