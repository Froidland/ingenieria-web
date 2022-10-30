import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
