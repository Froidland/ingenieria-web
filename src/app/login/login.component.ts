import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  public show: boolean = false;


  constructor() {
    
   }

  ngOnInit(): void {
   
  }
}
