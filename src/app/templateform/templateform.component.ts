import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
hero:any = {
  name:"",
  age:""
}
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.hero)
  }
}
