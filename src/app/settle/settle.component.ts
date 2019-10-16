import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { UserMod, SettleUp } from '../usermod';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.scss']
})
export class SettleComponent implements OnInit {

  exp :Array<SettleUp> =[];
  users: Array<UserMod>=[];
  newExp : any = [];
  mockUsers: Array<UserMod> =[{name:'Richa', id:1, expense:[]},{name:'Sharma', id:2, expense:[]}];

  constructor(private data: TodoDataService) { }

  ngOnInit() {
    this.exp =this.data.getAllExp()==undefined?[]:this.data.getAllExp();
    this.users = this.data.getAllTodos()==undefined?this.mockUsers:this.data.getAllTodos();

    this.exp.forEach(element => {
      var touser = this.users.filter(function(item){
      return item.id== element.to
      })[0].name;
      var fromuser = this.users.filter(function(item){
      return item.id== element.from
      })[0].name;

      var exp = {fromName:'', toName:'', amount:0};
      exp.amount = element.amount;
      exp.fromName = fromuser;
      exp.toName = touser;
      this.newExp.push(exp);
    });


  }

}
