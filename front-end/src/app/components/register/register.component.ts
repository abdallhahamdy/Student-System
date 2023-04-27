import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logInFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    });
  }

  OnSubmit() {
    this.loginService.login(this.logInFormGroup.get('admin')?.value.userName,this.logInFormGroup.get('admin')?.value.password)
    this.route.navigateByUrl('students');
  }

}
