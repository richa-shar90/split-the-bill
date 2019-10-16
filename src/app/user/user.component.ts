import { Component, OnInit } from '@angular/core';
import { UserMod } from '../usermod';
import { TodoDataService } from '../todo-data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name: string ='';
  email: string ='';
  users: Array<UserMod>= [{name:'Richa', id:1, expense:[]},{name:'Sharma', id:2, expense:[]}];


  constructor(private data: TodoDataService) { }

  ngOnInit() {
     //this.data.setUser(this.users);
    this.users = this.data.getAllTodos()==undefined?this.users:this.data.getAllTodos();
  }

  addUser(){

    if(this.name==""){
      return;
    }

    let customObj = new UserMod();
   customObj.name = this.name;
   if(this.users.length>0){
     var lastElm = this.users[this.users.length-1];
     var count = lastElm.id +1;
   }
   else
    var count = 1;

   customObj.id= count;
   this.users.push(customObj);
  this.data.setUser(this.users);
  }

}
