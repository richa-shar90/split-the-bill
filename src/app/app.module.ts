import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { TodoDataService } from './todo-data.service';
import { BillsplitComponent } from './billsplit/billsplit.component';
import { SettleComponent } from './settle/settle.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    BillsplitComponent,
    SettleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
