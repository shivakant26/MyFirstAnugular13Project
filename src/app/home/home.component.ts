import { Component, OnInit } from '@angular/core';
// import { Hero } from '../Hero';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // hero : Hero ={
  //   id:1,
  //   name:"windstome"
  // }
title:string = "this is propery bindig";
bool:boolean = false;
age:any = 26;
data:any = [
  {Emp_id:1,Emp_name:"jhon",Emp_salary:2500},
  {Emp_id:2,Emp_name:"rudra",Emp_salary:2500},
  {Emp_id:3,Emp_name:"aman",Emp_salary:2500},
  {Emp_id:4,Emp_name:"anah",Emp_salary:2500},
  {Emp_id:5,Emp_name:"ravi",Emp_salary:2500}
]
  constructor() { }

  ngOnInit(): void {
    this.data;
  }
  checkEvent(){
    this.title = "welcome"
  }
}
