import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
title:string = "Basic Form Example";
display:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  getData(data:NgForm){
    console.log(data)
  }
  Toggle(){
    this.display = !this.display;
  }
}
