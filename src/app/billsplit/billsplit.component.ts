import { Component, OnInit, Input } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { UserMod, SettleUp } from '../usermod';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-billsplit',
  templateUrl: './billsplit.component.html',
  styleUrls: ['./billsplit.component.scss']
})
export class BillsplitComponent implements OnInit {

  name: string ='';
  id: number =0;
  selectedUserid: number =0;
  selectedUsername:string ='';
  selectedUser : UserMod;
  selectedUserexpense: number = 0;
  expen : Array<number>;
  users: Array<UserMod>= [];
  restUsers: Array<UserMod>= [];
  friends: String="";
  friendArr: Array<UserMod>=[];
  settles : Array<SettleUp>=[];
  error : Array<string>=[];
  mockUsers : Array<UserMod>= [{name:'Richa', id:1, expense:[]},{name:'Sharma', id:2, expense:[]}];
  //@Input() uList : UserMod[]; 
  expense: Array<SettleUp> =[];

  constructor(private data: TodoDataService) { }

  ngOnInit() {
    
    this.users =this.data.getAllTodos()==undefined?this.mockUsers:this.data.getAllTodos();
    this.expense = this.data.getAllExp()==undefined?[]:this.data.getAllExp();
    
  }

  onSelect(user){
    this.selectedUserid = user.id;
    this.selectedUsername = user.name;
    this.selectedUserexpense = user.expense;

    this.restUsers = this.users.filter(function(item){
      return item.id!=user.id
    });

    this.friends = "";
    this.friendArr =[];
  }

  addExpense(exp, id){
this.error=[];
    if(this.friendArr.length<=0){
      this.error.push("Add friends");
    }

    if(exp==undefined|| exp==0){
       this.error.push("Add valid amount");
    }

    if(this.error.length>0)
     return;

    var user = this.users.filter(function(item){
      return item.id== id
    })[0];

    var divAmount = exp/(this.friendArr.length+1);

    user.expense = user.expense==undefined?[]:user.expense;
    user.expense.push(divAmount);

    var inx = this.users.findIndex((u)=>{
      return u.id == id; 
    });
    this.users[inx].expense = user.expense;

    

    this.friendArr.forEach(elm => {
      var settle={from:0,amount:0,to:0};
      settle.amount = divAmount;
      settle.from = id;
      settle.to = elm.id;
      this.settles.push(settle);
    });
    
    this.expense.forEach(element => {
      var exp1 = {to:0, from:0, amount:0};
      exp1.to = element.to;
      exp1.from = element.from;
      exp1.amount = element.amount;
      this.settles.push(exp1);
    });
    
    this.data.setexpense(this.settles);

    this.friends = "";
    this.friendArr =[];
    //this.selectedUsername =''
    this.selectedUserexpense=0;
   // this.selectedUserid=0;
  }

  addFriends(u){
      var user = this.restUsers.filter(function(item){
      return item.id== u.id
    })[0];

    var inx = this.friendArr.findIndex((f)=>{
      return u.id == f.id; 
    });

    if(inx==-1){
    this.friends = this.friends!=""? this.friends+',' +u.name : u.name;

    this.friendArr.push(u);
    }
  }

  

}
