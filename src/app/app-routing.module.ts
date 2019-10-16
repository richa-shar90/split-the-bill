import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './user/user.component';
import { ListComponent} from './list/list.component';
import { BillsplitComponent } from './billsplit/billsplit.component';
import { SettleComponent } from './settle/settle.component';
const routes: Routes = [
  
    {path:'split', component: BillsplitComponent},
    {path:'', component: UserComponent},
    {path:'settle', component: SettleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
