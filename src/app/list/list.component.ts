import { Component, OnInit, Input } from '@angular/core';
import { UserMod } from '../usermod';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: Array<UserMod>= [];
  @Input() uList : UserMod[]; 

  constructor() { }

  ngOnInit() {
    this.users = this.uList;
  }

  

}
