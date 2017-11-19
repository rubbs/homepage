import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WeihnachtsmarktComponent} from './weihnachtsmarkt/weihnachtsmarkt.component';
import {PutzplanComponent} from './putzplan/putzplan.component';

const routes: Routes = [
  {path: 'weihnachtsmarkt', component: WeihnachtsmarktComponent},
  {path: 'putzplan', component: PutzplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
