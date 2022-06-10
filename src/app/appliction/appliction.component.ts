import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliction',
  templateUrl: './appliction.component.html',
  styleUrls: ['./appliction.component.css']
})
export class ApplictionComponent implements OnInit {
  color : any = "blue";
  color1 : any = "blue";
  fontSize : any = '21px';
  age :any = 21;
  userList : any =[
    {name:"jhon",age:25,socialAccount:["facebook","instagram","whatsapp"]},
    {name:"jhon",age:25,socialAccount:["facebook","instagram","whatsapp"]},
    {name:"jhon",age:25,socialAccount:["facebook","instagram","whatsapp"]},
    {name:"jhon",age:25,socialAccount:["facebook","instagram","whatsapp"]},
    {name:"jhon",age:25,socialAccount:["facebook","instagram","whatsapp"]},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  updateColor():void{
    this.color = 'red';
    this.fontSize = '45px';
  }
}
