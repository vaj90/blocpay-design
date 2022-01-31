import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow = false;
  password = "";
  focusPassword(e: any){
    this.isShow = true;
  }
  blurPassword(e: any){
    this.isShow = false;
  }
  changePassword(e: any) {
    this.password = e.target.value;
  }
  showPassword(){
    let btn: any = document.getElementById("password");
    btn.type = btn.type == "text" ? "password" : "text";

  }
  constructor() { }

  ngOnInit(): void {
  }

}
